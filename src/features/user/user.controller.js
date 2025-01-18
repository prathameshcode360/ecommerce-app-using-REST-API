import UserModel from "./user.model.js";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";
export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel(name, email, hashPassword);
    await this.userRepository.signUp(newUser);
    return res.status(201).send({
      msg: "user added successfully",
      newuser: newUser,
    });
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const findUser = await this.userRepository.findByEmail(email); // Await the asynchronous call

      if (!findUser) {
        return res.status(400).send("Incorrect Credentials");
      }

      // Compare the plain password with the hashed password
      const result = await bcrypt.compare(password, findUser.password);

      if (!result) {
        return res.status(400).send("Incorrect Credentials");
      }

      return res.status(200).send({
        msg: "Login successfully",
        newuser: findUser,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }

  getUsers(req, res) {
    let users = UserModel.getAll();
    return res.status(200).send(users);
  }
}
