import { asycnHandler } from "../utils/asycnHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Product } from "../models/product.model.js";
import {ApiError} from "../utils/ApiError.js";

const addProduct = asycnHandler(async(req, res, next) => {
    const {
        productName,
        productSummary,
        productDescription,
        productPrice,
        productDiscount,
        productQuantity,
    } = req.body;

    for(let keys in req.body){
        if(!req.body[keys])
        {
            throw new ApiError(400,"All fields are required");
        }
    }
    const productImageLocalPath = req?.file?.path;

    console.log(req.file);

    if (!productImageLocalPath) {
        throw new ApiError(400, "Product Image not Found");
    }

    const product = await Product.create({
        productName,
        productSummary,
        productPrice,
        productImage: productImageLocalPath,
        productDiscount: productDiscount || 0,
        productDescription,
        productQuantity,
    });

    if (!product) {
        throw new ApiError(500, "Interal Server Error: error while creating product");
    }

    res.status(200).json(
        new ApiResponse(200, product, "Product created successfully")
    );
});

export { addProduct };
