import express from "express";
import upload from "../../middlewares/fileupload.middleware.js";
import ProductController from "./product.controller.js";

// creating product routers
const productRouter = express.Router();

//instantiated product controller

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/filter", productController.filterProduct);
productRouter.post("/rate", productController.rateProduct);
productRouter.get("/:id", productController.getOneProduct);

productRouter.post(
  "/",
  upload.single("image"),
  productController.addNewProduct
);

export default productRouter;
