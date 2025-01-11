// manage paths/routes of product contrller
// 1.import express
import express from "express";
import ProductController from "./product.controller.js";
import uploads from "../../middlewares/fileupload.middleware.js";

// 2. initialize express router
const productRouter = express.Router();

//instantiated product controller

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.post("/log", productController.postProduct);
productRouter.post(
  "/add",
  uploads.single("image"),
  productController.addNewProduct
);
productRouter.get("/:id", productController.getOneProduct);

productRouter.get("/filter", productController.filterProduct);

export default productRouter;
