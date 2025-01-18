export default class UserModel {
  constructor(name, email, password, id) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static getAll() {
    return users;
  }
}

let users = [new UserModel(1, "seller", "seller@gmail.com", "pass123")];
