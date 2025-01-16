import ProductModel from "./product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    return res.status(200).send(products);
  }
}
