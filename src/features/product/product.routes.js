import express from "express";
import ProductController from "./product.controller.js";

// creating product routers
const productRouter = express.Router();

//instantiated product controller

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);

productRouter.post("/", productController.addNewProduct);

export default productRouter;
