import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import ProductModel from "./product.model.js";

export default class ProductRepository {
  constructor() {
    this.collection = "products";
  }
  async add(name, price, image, category) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const newProduct = new ProductModel(name, price, image, category);
      await collection.insertOne(newProduct);
      return newProduct;
    } catch (err) {
      console.error("Error:", err);
    }
  }
  async getAll() {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const products = await collection.find().toArray();
      return products;
    } catch (err) {
      console.error("Error:", err);
    }
  }
  async get(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const product = await collection.findOne({ _id: new ObjectId(id) });
      return product;
    } catch (err) {
      console.error("Error:", err);
    }
  }
}
