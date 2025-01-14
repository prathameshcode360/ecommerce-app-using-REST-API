import express from "express";
import UserController from "./user.controller.js";

const usreController = new UserController();

const userRouter = express.Router();

userRouter.post("/register", usreController.registerUser);
userRouter.post("/login", usreController.loginUser);

export default userRouter;
