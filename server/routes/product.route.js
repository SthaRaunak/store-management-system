import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { addProduct } from "../controllers/product.controllers.js";



const router = Router();

router.route("/getProducts").get(async (req, res, next) => {
    res.send("get product route!"); //test
});

router.route("/addProducts").post(upload.single("productImage"), addProduct);

export default router;
