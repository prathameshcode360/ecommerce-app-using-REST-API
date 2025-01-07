// manage paths/routes of product contrller
// 1.import express
import express from "express";
import ProductController from "./product.controller.js";

// 2. initialize express router
const productRouter = express.Router();

//instantiated product controller

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addNewProduct);

export default productRouter;
