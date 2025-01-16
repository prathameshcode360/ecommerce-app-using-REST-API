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
  static signUp(name, email, password) {
    const newUser = new UserModel(users.length + 1, name, email, password);
    users.push(newUser);
    return newUser;
  }

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
}

let users = [new UserModel(1, "seller", "seller@gmail.com", "pass123")];
