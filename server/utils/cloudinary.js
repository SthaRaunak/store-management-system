import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        const response = cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto",
            },
            function (error, result) {
                if (error) {
                    console.error("cloudinary error: ", error);
                }

                fs.unlinkSync(localFilePath); //delete the local instance of file if successsfully uploaded in cloudinary
                // console.log("cloudinary here:", result);
            }
        );

        return response;
    } catch (error) {
        console.error(
            "Cloudinary Error: File failed to upload to cloudinary: ",
            error
        );
        fs.unlinkSync(localFilePath); //delete the local instance of file if error

        return null;
    }
};

export { uploadOnCloudinary };
