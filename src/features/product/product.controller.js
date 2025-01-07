import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }
  addNewProduct(req, res) {
    console.log(req.body);
    console.log("this is post request");
    res.status(200).send("post request is recieved");
  }
  getOneProduct(req, res) {}
}
