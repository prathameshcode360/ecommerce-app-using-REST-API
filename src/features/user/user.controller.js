import UserModel from "./user.model.js";

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
      return res.send("Sign-Successfull");
    }
  }
}
