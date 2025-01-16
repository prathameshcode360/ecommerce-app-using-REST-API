export default class UserSchema {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static addUser = (data) => {
    const newUser = new UserSchema(
      users.length + 1,
      data.name,
      data.email,
      data.password
    );
    users.push(newUser);
    return newUser;
  };
  static confirmLogin = (data) => {
    return users.find(
      (user) => user.email === data.email && user.password === data.password
    );
  };
  static getAllUsers = () => {
    return users;
  };
}

let users = [new UserSchema(1, "digu", "digu@gmail.com", "pass123")];
