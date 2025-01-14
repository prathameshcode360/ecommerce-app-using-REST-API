import UserSchema from "../features/user/user.model.js";

export default function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).send("Unauthorizes User");
  }
  console.log(authHeader);

  const base64Credentials = authHeader.replace("Basic", "");
  console.log(base64Credentials);

  const decodeCredentials = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  console.log(decodeCredentials);
  const creds = decodeCredentials.split(":");
  const user = UserSchema.getAllUsers().find(
    (u) => u.email == creds[0] && u.password == creds[1]
  );
  if (user) {
    next();
  } else {
    return res.status(401).send("Incorrect Credentials");
  }
}
