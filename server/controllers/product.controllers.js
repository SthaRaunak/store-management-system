import mongoose from "mongoose";

import { asycnHandler } from "../utils/asycnHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { deleteOnCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";

const addProduct = asycnHandler(async (req, res, next) => {
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

const getAllProducts = asycnHandler(async (req, res, next) => {
    const products = await Product.find().select("-productDescription");
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

const deleteProduct = asycnHandler(async (req, res, next) => {
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

export { addProduct, getAllProducts, deleteProduct };
