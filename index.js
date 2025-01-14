import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";

const server = express();

//using body parser middleware
server.use(bodyParser.json());

//creating products routes pattern
server.use("/api/products", productRouter);

//creating users routes pattern

server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
