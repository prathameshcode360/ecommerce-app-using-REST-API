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

  delete(req, res) {
    const userId = req.userId;
    const cartId = req.params.id;
    const error = CartModel.delete(cartId);
    if (error) {
      return res.status(404).send(error);
    } else {
      return res.status(200).send("Cart item removed");
    }
  }
}
