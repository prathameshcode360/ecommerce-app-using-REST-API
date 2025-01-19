import ProductModel from "./product.model.js";

export default class ProductController {
  getProducts(req, res) {
    try {
      let products = ProductModel.getAll();
      return res.status(200).send(products);
    } catch (err) {
      console.error("Error while fetching products:", err);
      return res.status(500).send("Error occured while fetching products");
    }
  }
  addProduct(req, res) {
    try {
      const { name, price } = req.body;
      const image = req.file.filename;
      const newProduct = ProductModel.add(name, price, image);
      return res.status(201).send(newProduct);
    } catch (err) {
      console.error("Error while fetching products:", err);
      return res.status(500).send("Error occured while adding products");
    }
  }
  getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = ProductModel.getOne(id);
      if (!product) {
        return res.status(400).send("product not found");
      } else {
        return res.status(200).send(product);
      }
    } catch (err) {
      console.error("Error while fetching products:", err);
      return res.status(500).send("Error occured while fetching one product");
    }
  }
  filterProducts(req, res) {
    try {
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const result = ProductModel.filter(minPrice, maxPrice);
      if (!result) {
        return res.status(400).send("product not found");
      } else {
        return res.status(200).send(result);
      }
    } catch (err) {
      console.error("Error while fetching products:", err);
      return res.status(500).send("Error occured while filtering products");
    }
  }
}
