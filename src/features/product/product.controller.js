import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }
  addNewProduct(req, res) {}
  getOneProduct(req, res) {}
}
