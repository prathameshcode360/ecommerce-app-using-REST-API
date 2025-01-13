import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const newUser = UserModel.signUp(name, email, password, type);
    return res.status(201).send(newUser);
  }
  signIn(req, res) {
    const { email, password } = req.body;
    const userMatch = UserModel.signIn(email, password);
    if (!userMatch) {
      return res.send("Incorrect Credentials");
    } else {
      // here we create token and send token
      //1.create token

      const token = jwt.sign(
        { userId: userMatch.id, email: userMatch.email },
        "YRQ`jA%w8PG5M<P/LVjsDs93p',9p|",
        { expiresIn: "1h" }
      );
      //2.sending token
      return res.send(token);
    }
  }
}
