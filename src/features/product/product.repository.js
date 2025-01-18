import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongodb.js";

export default class ProductRepository {
  constructor() {
    this.collection = "products";
  }

  async getAll() {
    try {
      const db = getDb();
      const collection = db.collection(this.collection);
      return await collection.find().toArray(); // Convert cursor to array and return
    } catch (err) {
      console.log(err);
      throw new Error("Error fetching products");
    }
  }

  async add(newProduct) {
    try {
      const db = getDb();
      const collection = db.collection(this.collection);
      const result = await collection.insertOne(newProduct);
      return { ...newProduct, _id: result.insertedId }; // Return the new product with the inserted ID
    } catch (err) {
      console.log(err);
      throw new Error("Error adding product");
    }
  }

  async get(id) {
    try {
      const db = getDb();
      const collection = db.collection(this.collection);
      const product = await collection.findOne({ _id: new ObjectId(id) }); // Instantiate ObjectId correctly
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Error fetching product");
    }
  }
}
