import { getDb } from "../../config/mongodb.js";

export default class UserRepository {
  async signUp(newUser) {
    try {
      const db = getDb();
      const collection = db.collection("users");
      await collection.insertOne(newUser); // Insert new user into the collection
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }

  async findByEmail(email) {
    try {
      const db = getDb();
      const collection = db.collection("users");
      return await collection.findOne({ email }); // Find user by email
    } catch (err) {
      console.log(err);
    }
  }
}
