import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    let products = ProductModel.getAll();
    return res.status(200).send(products);
  }

  addNewProduct(req, res) {
    const { name, desc, price } = req.body;
    const image = req.file.filename;
    const createdRecord = ProductModel.add(name, desc, Number(price), image);
    return res.send(createdRecord);
  }
}
