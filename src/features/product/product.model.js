export default class ProductModel {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }

  static add(productObj) {
    productObj.id = products.length + 1;
    products.push(productObj);
    return productObj;
  }

  static get(id) {
    const product = products.find((p) => p.id == id);
    return product;
  }
  static filter(minPrice, maxPrice) {
    return products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
  }

  static getAll() {
    return products;
  }
}
var products = [
  new ProductModel(
    1,
    "Product 1",
    200,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    100,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    250,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
