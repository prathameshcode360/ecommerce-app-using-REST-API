import ProductModel from "./product.model.js";
import ProductRepository from "./product.repository.js";
export default class ProductController {
  constructor() {
    this.productRepo = new ProductRepository();
  }

  async addProduct(req, res) {
    try {
      const { name, price, category } = req.body;
      const image = req.file.filename;
      const newProduct = await this.productRepo.add(
        name,
        price,
        image,
        category
      );
      return res.status(201).send(newProduct);
    } catch (err) {
      console.error("Error while fetching products:", err);
      return res.status(500).send("Error occured while adding products");
    }
  }
  async getProducts(req, res) {
    try {
      let products = await this.productRepo.getAll();
      return res.status(200).send(products);
    } catch (err) {
      console.error("Error while fetching products:", err);
      return res.status(500).send("Error occured while fetching products");
    }
  }
  async getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = await this.productRepo.get(id);
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
