import UserSchema from "../user/user.model.js";

export default class ProductModel {
  constructor(id, name, desc, price, image) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.image = image;
  }

  static getAll() {
    return products;
  }
  static add(name, desc, price, image) {
    let newProduct = new ProductModel(
      products.length + 1,
      name,
      desc,
      price,
      image
    );
    products.push(newProduct);
    return newProduct;
  }
  static get(id) {
    let product = products.find((p) => p.id == id);
    return product;
  }
  static filter(minPrice, maxPrice) {
    const result = products.filter((p) => {
      return p.price >= minPrice && p.price <= maxPrice;
    });
    return result;
  }
  static rateProducts(userID, productID, ratings) {
    // 1. Validate user
    const user = UserSchema.getAllUsers().find((u) => u.id == userID);
    if (!user) {
      return "User not found";
    }

    // 2. Validate product
    const product = products.find((p) => p.id == productID);
    if (!product) {
      return "Product not found";
    }

    // 3. Initialize ratings array if it doesn't exist and add the rating
    if (!product.ratings) {
      product.ratings = [{ userID, ratings }];
    } else {
      // 4. Check if the user has already rated this product
      const existingRatingIndex = product.ratings.findIndex(
        (r) => r.userID == userID
      );

      if (existingRatingIndex >= 0) {
        // Update the existing rating
        product.ratings[existingRatingIndex].ratings = ratings;
      } else {
        // Add a new rating
        product.ratings.push({ userID, ratings });
      }
    }
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    80,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    150,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    220,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
