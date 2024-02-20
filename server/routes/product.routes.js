import { Router } from "express";

const router = Router();

router.route("/getProducts").get(async (req, res, next) => {
    res.send("get product route!"); //test
});

export default router;