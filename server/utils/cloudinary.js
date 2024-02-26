import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//getPublicId(http://res.cloudinary.com/dov2k3v5z/image/upload/v1708889403/nls6l3n3etne7d8xx0ul.jpg); : nls6l3n3etne7d8xx0ul
const getPublicId = (cloudinaryUrl) => {
    return cloudinaryUrl.split("/").pop().split(".").at(0);
};

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

const deleteOnCloudinary = async (cloudinaryUrl) => {
    try {
        if (!cloudinaryUrl) return null;

        const response = await cloudinary.uploader.destroy(
            getPublicId(cloudinaryUrl),
            {
                resource_type: "image",
            }
        );

        return response;
    } catch (error) {
        console.error(
            "Cloudinary Error: File failed to destroy on cloundinary: ",
            error
        );
        return null;
    }
};

export { uploadOnCloudinary, deleteOnCloudinary };
