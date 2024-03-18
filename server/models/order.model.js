import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },
        products: [
            {
                product: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
        ],
        quantity: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            default: "pending",
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        paymentMethod: {
            type: String,
            default: "COD",
        },
        notes: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = mongoose.model("Order", orderSchema);
