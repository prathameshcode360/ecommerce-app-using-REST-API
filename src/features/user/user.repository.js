import { getDb } from "../../config/mongodb.js";

export default class UserRepository {
  async signUp(newUser) {
    try {
      const db = getDb();
      const collection = db.collection("users"); // Corrected method name

      await collection.insertOne(newUser); // Insert new user into the collection
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }
  async signIn(email, password) {
    try {
      const db = getDb();
      const collection = db.collection("users"); // Corrected method name

      return await collection.findOne({ email, password }); // find user into the collection
    } catch (err) {
      console.log(err);
    }
  }
}
