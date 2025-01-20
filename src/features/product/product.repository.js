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
  async filter(minPrice, maxPrice, category) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const filterExpression = {};

      // Combine minPrice and maxPrice into a single price filter if both are provided
      if (minPrice && maxPrice) {
        filterExpression.price = {
          $gte: parseFloat(minPrice),
          $lte: parseFloat(maxPrice),
        };
      } else if (minPrice) {
        filterExpression.price = { $gte: parseFloat(minPrice) };
      } else if (maxPrice) {
        filterExpression.price = { $lte: parseFloat(maxPrice) };
      }

      // Add category filter if provided
      if (category) {
        filterExpression.category = category;
      }

      // Retrieve and return the filtered results
      return await collection.find(filterExpression).toArray();
    } catch (err) {
      console.error("Error filtering products:", err);
    }
  }
}
