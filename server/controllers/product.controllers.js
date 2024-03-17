import mongoose from "mongoose";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { deleteOnCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";

const addProduct = asyncHandler(async (req, res, next) => {
    const {
        productName,
        productSummary,
        productDescription,
        productPrice,
        productDiscount,
        productQuantity,
    } = req.body;

    for (let keys in req.body) {
        if (!req.body[keys]) {
            throw new ApiError(400, "All fields are required");
        }
    }
    const productImageLocalPath = req?.file?.path;

    // console.log(req.file);

    if (!productImageLocalPath) {
        throw new ApiError(400, "Product Image not Found");
    }

    const productImage = await uploadOnCloudinary(productImageLocalPath);

    if (!productImage) {
        throw new ApiError(500, "Image failed to Upload, Please try again.");
    }

    const product = await Product.create({
        productName,
        productSummary,
        productPrice,
        productImage: productImage.url,
        productDiscount: productDiscount || 0,
        productDescription,
        productQuantity,
    });

    if (!product) {
        throw new ApiError(
            500,
            "Interal Server Error: error while creating product"
        );
    }

    res.status(200).json(
        new ApiResponse(200, product, "Product created successfully")
    );
});

const getAllProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find().select(
        "-productDescription, -summary"
    );
    const totalProducts = await Product.countDocuments();

    // console.log(totalProducts);
    res.status(200).json(
        new ApiResponse(
            200,
            { products, productsCount: totalProducts },
            "Products fetched successfully"
        )
    );
});

const deleteProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(
            400,
            "Invalid product id, Please check the id again!"
        );
    }

    const product = await Product.findById(id);
    if (!product) {
        throw new ApiError(400, "Product doesnt Exist");
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
        throw new ApiError(500, "Server Error: Product failed to delete");
    }

    const cloudinaryResponse = await deleteOnCloudinary(
        deletedProduct?.productImage
    );

    // console.log(cloudinaryResponse);

    res.status(200).json(
        new ApiResponse(202, deletedProduct, "Product deleted successfully")
    );
});

const getProductDetail = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        throw new ApiError(400, "id not provided");
    }

    const productData = await Product.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(id) },
        },
        {
            $lookup: {
                from: "categories",
                localField: "productCategory",
                foreignField: "_id",
                as: "productCategory",
            },
        },
        {
            $addFields: {
                productTotalPrice: {
                    $subtract: ["$productPrice", "$productDiscount"],
                },
            },
        },
        {
            $addFields: {
                productStockValue: {
                    $multiply: ["$productTotalPrice", "$productQuantity"],
                },
            },
        },
        {
            $project: {
                productName: 1,
                productImage: 1,
                productSummary: 1,
                productDescription: 1,
                productPrice: 1,
                productDiscount: 1,
                productQuantity: 1,
                productTotalPrice: 1,
                productStockValue: 1,
                productCategory: 1,
            },
        },
    ]);

    res.status(200).json(
        new ApiResponse(
            200,
            productData[0],
            "Product detail fetched successfully"
        )
    );
});

const updateProductImage = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new ApiError(400, "product id not provided");

    const product = await Product.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(id) },
        },
        {
            $project: {
                productImage: 1,
            },
        },
    ]);

    if (!product) throw new ApiError(404, "Product with id not found!");

    const { productImage: oldImageCloudUrl } = product[0];

    const imageLocalPath = req.file?.path;

    if (!imageLocalPath) {
        throw new ApiError(400, "Product Image not provided");
    }

    const productImage = await uploadOnCloudinary(imageLocalPath);

    if (!productImage) {
        throw new ApiError(500, "Image failed to Upload, Please try again");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
            $set: {
                productImage: productImage.url,
            },
        },
        {
            new: true,
        }
    ).select("-productDescription -summary");

    const cloudinaryResponse = await deleteOnCloudinary(oldImageCloudUrl);

    console.log(cloudinaryResponse);

    res.status(200).json(
        new ApiResponse(
            200,
            updatedProduct,
            "Product Image successfully updated"
        )
    );
});

export {
    addProduct,
    getAllProducts,
    deleteProduct,
    getProductDetail,
    updateProductImage,
};
