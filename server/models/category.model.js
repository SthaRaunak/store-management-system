import { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
        },

        categoryDescription: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Category = model("Category", categorySchema);
