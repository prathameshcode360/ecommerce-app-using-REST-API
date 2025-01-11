import UserModel from "../features/user/user.model.js";

export default function basicAutherizer(req, res, next) {
  // 1.checking if autherization header is empty

  const authHeader = req.headers["authorization"];

  console.log(authHeader);
  if (!authHeader) {
    return res.send("no autherization details found");
  }

  // 2.extract the creadentials
  const base64Credentilas = authHeader.replace("Basic ", "").trim();

  console.log(base64Credentilas);

  // 3.decode the credentials ...

  const decodeCredentilas = Buffer.from(base64Credentilas, "base64").toString(
    "utf-8"
  );
  console.log(decodeCredentilas);
  const creds = decodeCredentilas.split(":");

  const user = UserModel.getAll().find(
    (u) => u.email == creds[0] && u.password == creds[1]
  );
  if (user) {
    next();
  } else {
    return res.send("Incorrect credentials");
  }
}
