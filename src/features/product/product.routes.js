import express from "express";
import ProductController from "./product.controller.js";

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", productController.getProducts);
productRouter.post("/add", productController.addProduct);
productRouter.get("/filter", productController.filterProducts);
productRouter.get("/get/:id", productController.getOneProduct);

export default productRouter;
