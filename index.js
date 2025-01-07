import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
const server = express();

//setting body parser
server.use(bodyParser.json());

// to all request related to product redirect the product routes
server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
