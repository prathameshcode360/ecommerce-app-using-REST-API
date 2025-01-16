import express from "express";
import productRouter from "./src/features/product/product.routes.js";
const server = express();

server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
