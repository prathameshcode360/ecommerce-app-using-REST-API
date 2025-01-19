import { getDB } from "../../config/mongodb.js";
import UserModel from "./user.model.js";
export default class UserRepository {
  async signUp(name, email, password) {
    try {
      const db = getDB();
      const collection = db.collection("users");

      const newUser = new UserModel(name, email, password);
      await collection.insertOne(newUser);
      return newUser;
    } catch (err) {
      console.error("Error:", err);
    }
  }
  findByEmail(email) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      const user = collection.findOne({ email });
      return user;
    } catch (err) {
      console.error("Error:", err);
    }
  }
}
