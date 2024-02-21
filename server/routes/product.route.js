import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { addProduct, getAllProducts} from "../controllers/product.controllers.js";



const router = Router();

router.route("/getProducts").get(getAllProducts);
router.route("/addProducts").post(upload.single("productImage"), addProduct);

export default router;
