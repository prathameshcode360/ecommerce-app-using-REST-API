import ProductModel from "./product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    return res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, price, image } = req.body;
    const newProduct = ProductModel.add(name, price, image);
    return res.status(201).send(newProduct);
  }
}
