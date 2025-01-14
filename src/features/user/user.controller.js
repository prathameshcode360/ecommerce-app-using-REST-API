import UserSchema from "./user.model.js";

export default class UserController {
  registerUser = (req, res) => {
    const { name, email, password } = req.body;

    const newUser = UserSchema.addUser({ name, email, password });

    console.log(newUser);

    return res.status(201).json({
      status: "success",
      user: newUser,
    });
  };

  loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = UserSchema.confirmLogin({ email, password });
    if (user) {
      return res.status(200).json({
        status: "success",
        message: "login successful",
      });
    } else {
      return res.status(400).json({
        status: "failure",
        msg: "invalid user details",
      });
    }
  };
}
