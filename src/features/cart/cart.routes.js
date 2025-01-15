import CartController from "./cart.controller.js";
import express from "express";

const cartRouter = express.Router();

const cartController = new CartController();

cartRouter.post("/add", cartController.add);
cartRouter.get("/get", cartController.get);

export default cartRouter;
