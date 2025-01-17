import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";

const server = express();
//bodyparser
server.use(bodyParser.json());

server.use(loggerMiddleware);

// routes for users
server.use("/api/users/", userRouter);

//rotes for products
server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
