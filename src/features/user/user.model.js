export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static getAll() {
    return users;
  }
}

let users = [new UserModel(1, "seller", "seller@gmail.com", "pass123")];
