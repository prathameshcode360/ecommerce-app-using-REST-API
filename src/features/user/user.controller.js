import UserModel from "./user.model.js";

export default class UserController {
  getSignUp(req, res) {
    const { name, email, password } = req.body;
    const newUser = UserModel.signUp(name, email, password);
    return res.status(201).send(newUser);
  }

  getsignIn(req, res) {
    const { email, password } = req.body;
    const user = UserModel.signIn(email, password);
    if (!user) {
      return res.status(404).send("user not found");
    } else {
      return res.send("Login Sucessfull");
    }
  }
}
