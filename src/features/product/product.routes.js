import express from "express";
import ProductController from "./product.controller.js";
import fileUpload from "../../middlewares/fileupload.middleware.js";
const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", (req, res) => {
  productController.getProducts(req, res);
});
productRouter.post("/add", fileUpload.single("image"), (req, res) => {
  productController.addProduct(req, res);
});
// productRouter.get("/filter", productController.filterProducts);
productRouter.get("/get/:id", (req, res) => {
  productController.getOneProduct(req, res);
});

export default productRouter;
