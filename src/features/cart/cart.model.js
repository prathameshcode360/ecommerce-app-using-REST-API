export default class CartModel {
  static cartItems = []; // Static array to store cart items

  constructor(id, productId, quantity, userId) {
    this.id = id; // Unique cart item ID
    this.productId = productId; // ID of the product
    this.quantity = quantity; // Quantity of the product
    this.userId = userId; // ID of the user
  }

  // Add new item to the cart
  static addItem(productId, quantity, userId) {
    const cartItem = new CartModel(
      this.cartItems.length + 1, // Auto-generate unique ID for the cart item
      productId,
      quantity,
      userId
    );
    this.cartItems.push(cartItem);
    return cartItem;
  }

  // Get all items for a specific user
  static getItem(userId) {
    return this.cartItems.filter((item) => item.userId === userId);
  }
}

// Example Initialization
CartModel.cartItems = [
  new CartModel(1, 1, 3, 1), // Valid cart item
  new CartModel(2, 2, 5, 2), // Valid cart item
];
