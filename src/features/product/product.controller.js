import ProductRepository from "./product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProducts(req, res) {
    try {
      const products = await this.productRepository.getAll(); // Get all products from repository
      return res.status(200).send(await products.toArray()); // Convert cursor to array before sending
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }

  async addProduct(req, res) {
    try {
      const { name, price } = req.body;
      const image = req.file.filename;
      const newProduct = { name, price, image };

      const addedProduct = await this.productRepository.add(newProduct); // Add product using repository
      return res.status(201).send(addedProduct);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }

  async getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = await this.productRepository.get(id); // Get product by ID from repository
      if (!product) {
        return res.status(400).send("Product not found");
      } else {
        return res.status(200).send(product);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }
}

// filterProducts(req, res) {
//   const minPrice = req.query.minPrice;
//   const maxPrice = req.query.maxPrice;
//   const result = ProductModel.filter(minPrice, maxPrice);
//   if (!result) {
//     return res.status(400).send("product not found");
//   } else {
//     return res.status(200).send(result);
//   }
