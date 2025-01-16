import UserModel from "./user.model.js";

export default class UserController {
  getUsers(req, res) {
    let users = UserModel.getAll();
    return res.status(200).send(users);
  }
  register(req, res) {
    const { name, email, password } = req.body;
    const newUser = UserModel.signUp(name, email, password);
    return res.status(201).send({
      msg: "user added successfully",
      newuser: newUser,
    });
  }
}
