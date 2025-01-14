import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import basicAuth from "./src/middlewares/basic.auth.middleware.js";

const server = express();

//using body parser middleware
server.use(bodyParser.json());

//creating users routes pattern
server.use("/api/user", userRouter);

//creating products routes pattern
server.use("/api/products", basicAuth, productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
