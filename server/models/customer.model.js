import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        secondName: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Customer = mongoose.model("Customer", customerSchema);
