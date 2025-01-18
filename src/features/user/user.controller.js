import UserModel from "./user.model.js";

export default class UserController {
  getUsers(req, res) {
    let users = UserModel.getAll();
    return res.status(200).send(users);
  }
  async register(req, res) {
    const { name, email, password } = req.body;
    const newUser = await UserModel.signUp(name, email, password);
    return res.status(201).send({
      msg: "user added successfully",
      newuser: newUser,
    });
  }

  login(req, res) {
    const { email, password } = req.body;
    const user = UserModel.signIn(email, password);
    if (!user) {
      return res.status(400).send("user not fonud");
    } else {
      return res.status(200).send({
        msg: "login successfully",
        newuser: user,
      });
    }
  }
}
