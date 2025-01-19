import { getDB } from "../../config/mongodb.js";
import ProductModel from "./product.model.js";

export default class ProductRepository {
  async add(name, price, image) {
    try {
      const db = getDB();
      const collection = db.collection("products");
      const newProduct = new ProductModel(name, price, image);
      await collection.insertOne(newProduct);
      return newProduct;
    } catch (err) {
      console.error("Error:", err);
    }
  }
}
