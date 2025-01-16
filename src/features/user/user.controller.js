import UserModel from "./user.model.js";

export default class UserController {
  getUsers(req, res) {
    let users = UserModel.getAll();
    return res.status(200).send(users);
  }
}
