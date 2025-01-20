export default class ProductModel {
  constructor(name, price, image, category, id) {
    this._id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
  }
}
