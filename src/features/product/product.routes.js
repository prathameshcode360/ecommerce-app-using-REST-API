import express from "express";
import ProductController from "./product.controller.js";

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", productController.getProducts);

export default productRouter;
