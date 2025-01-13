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
    return res.status(201).send(createdRecord);
  }

  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      return res.status(404).send("product not found");
    } else {
      return res.status(200).send(product);
    }
  }
}
