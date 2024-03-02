import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { addProduct, deleteProduct, getAllProducts} from "../controllers/product.controllers.js";



const router = Router();

router.route("/getProducts").get(getAllProducts);
router.route("/addProduct").post(upload.single("productImage"), addProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);


export default router;
