import CartModel from "./cart.model.js";
export default class CartController {
  add(req, res) {
    const { productId, quantity } = req.query;
    const userId = req.userId;
    CartModel.addItem(productId, quantity, userId);
    return res.status(201).send("product is added on cart");
  }
  get(req, res) {
    const userId = req.userId;
    const items = CartModel.getItem(userId);
    return res.status(200).send(items);
  }
}
