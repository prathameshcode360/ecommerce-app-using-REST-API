import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();

const userController = new UserController();

userRouter.get("/", userController.getUsers);
userRouter.post("/signup", userController.register);
userRouter.post("/login", userController.login);

export default userRouter;
