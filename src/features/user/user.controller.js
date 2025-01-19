import bcrypt from "bcrypt";
import UserModel from "./user.model.js";
import UserRepository from "./user.repository.js";

export default class UserController {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await this.userRepo.signUp(name, email, hashPassword);
    return res.status(201).send({
      msg: "user added successfully",
      newuser: newUser,
    });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await this.userRepo.findByEmail(email);
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).send("Invalid Credentails");
    } else {
      return res.status(200).send({
        msg: "login successfully",
        newuser: user,
      });
    }
  }
  getUsers(req, res) {
    let users = UserModel.getAll();
    return res.status(200).send(users);
  }
}
