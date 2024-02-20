import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER: server is running at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("SERVER: MONGO DB connection Failed! , error: ", error);
    });
