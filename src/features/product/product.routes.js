import express from "express";
import ProductController from "./product.controller.js";
import fileUpload from "../../middlewares/fileupload.middleware.js";
const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", productController.getProducts);
productRouter.post("/add", fileUpload.single("image"), (req, res) => {
  productController.addProduct(req, res);
});
productRouter.get("/filter", productController.filterProducts);
productRouter.get("/get/:id", productController.getOneProduct);

export default productRouter;
