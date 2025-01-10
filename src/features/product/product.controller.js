import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }
  postProduct(req, res) {
    console.log(req.body);
    console.log("this is post request");
    return res.send("post request is recieved");
  }

  addNewProduct(req, res) {
    const { name, price } = req.body;
    const newProduct = {
      name: name,
      price: parseFloat(price),
      image: req.file.filename,
    };

    const createdRecord = ProductModel.add(newProduct);
    console.log(createdRecord);
    return res.send(createdRecord);
  }
}
