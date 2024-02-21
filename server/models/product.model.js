import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },

        productImage: {
            type: String, //cloudinary url
            required: true,
        },
        productSummary: {
            type: String,
            required: true,
        },
        productDescription: {
            type: String,
            required: true,
        },

        productPrice: {
            type: Number,
            required: true,
        },

        productDiscount: {
            type: Number,
            default: 0,
        },

        productQuantity: {
            type: Number, // if 0 i.e out of stock
            default: 0,
        },

        productCategory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Category",
            },
        ],
    },
    { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
