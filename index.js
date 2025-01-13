import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";

const server = express();

//using body parser middleware
server.use(bodyParser.json());

//creating products routes pattern
server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
