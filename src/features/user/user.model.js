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

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
}

let users = [new UserModel(1, "seller", "seller@gmail.com", "pass123")];
