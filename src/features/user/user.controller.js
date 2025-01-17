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

  login(req, res) {
    const { email, password } = req.body;
    try {
      const user = UserModel.signIn(email, password); // Call the sign-in method
      if (!user) {
        return res.status(404).send("User not found"); // Handle case where user does not exist
      }
      return res.status(200).send({
        msg: "Login successful",
        newuser: user,
      });
    } catch (error) {
      console.error("Error during login:", error); // Log error for debugging
      return res.status(500).send("An error occurred while logging in");
    }
  }
}
