import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
const router = Router();

router.route("/getProducts").get(async (req, res, next) => {
    res.send("get product route!"); //test
});

export default router;