import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import basicAutherizer from "./src/middlewares/basciAuth.midddleware.js";
const server = express();

//setting body parser
server.use(bodyParser.json());
server.use(express.json());

// to all request related to product redirect the product routes
server.use("/api/products", basicAutherizer, productRouter);

// to all request related to user redirect the routes..
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3700, () => {
  console.log("server is listening on the port 3700");
});
