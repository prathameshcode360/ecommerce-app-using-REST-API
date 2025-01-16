import ProductModel from "./product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    return res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, price } = req.body;
    const image = req.file.filename;
    const newProduct = ProductModel.add(name, price, image);
    return res.status(201).send(newProduct);
  }
  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.getOne(id);
    if (!product) {
      return res.status(400).send("product not found");
    } else {
      return res.status(200).send(product);
    }
  }
  filterProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const result = ProductModel.filter(minPrice, maxPrice);
    if (!result) {
      return res.status(400).send("product not found");
    } else {
      return res.status(200).send(result);
    }
  }
}
