import UserSchema from "./user.model.js";
import jwt from "jsonwebtoken";
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
      // create a token
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
        },
        "FAU2McwhilVQHuv7vyIVxpb335HhvhzI",
        {
          expiresIn: "1h",
        }
      );

      return res.status(200).send(token);
    } else {
      return res.status(400).json({
        status: "failure",
        msg: "invalid user details",
      });
    }
  };
}
