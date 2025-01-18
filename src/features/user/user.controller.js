import UserModel from "./user.model.js";
import UserRepository from "./user.repository.js";
export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    const newUser = new UserModel(name, email, password);
    await this.userRepository.signUp(newUser);
    return res.status(201).send({
      msg: "user added successfully",
      newuser: newUser,
    });
  }

  getUsers(req, res) {
    let users = UserModel.getAll();
    return res.status(200).send(users);
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.userRepository.signIn(email, password);
      if (!user) {
        return res.status(400).send("user not fonud");
      } else {
        return res.status(200).send({
          msg: "login successfully",
          newuser: user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
