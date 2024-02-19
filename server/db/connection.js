import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE}`
        );
        console.log(
            `MongoDB connected successfullly! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongDB connection failed! ", error);
        process.exit(1); //ends the node process
    }
};

export default connectDB;
