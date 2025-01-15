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

  filterProduct(req, res) {
    const minPrice = Number(req.query.minPrice);
    const maxPrice = Number(req.query.maxPrice);
    const result = ProductModel.filter(minPrice, maxPrice);
    return res.status(200).send(result);
  }

  rateProduct(req, res) {
    const userID = req.query.userID;
    const productID = req.query.productID;
    const ratings = req.query.ratings;

    // Call the model method to rate the product
    const result = ProductModel.rateProducts(userID, productID, ratings);

    // Check result for errors or success messages
    if (result === "User not found" || result === "Product not found") {
      return res.status(400).send(result); // Send error message
    }

    return res.status(200).send("Rating added successfully");
  }
}
