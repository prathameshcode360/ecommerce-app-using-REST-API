import { Collection } from "mongodb";
import { getDb } from "../../config/mongodb.js";

export default class UserModel {
  constructor(name, email, password, id) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static getAll() {
    return users;
  }

  static async signUp(name, email, password) {
    try {
      const db = getDb();
      const collection = db.collection("users"); // Corrected method name
      const newUser = new UserModel(name, email, password);
      await collection.insertOne(newUser); // Insert new user into the collection
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
}

let users = [new UserModel(1, "seller", "seller@gmail.com", "pass123")];
