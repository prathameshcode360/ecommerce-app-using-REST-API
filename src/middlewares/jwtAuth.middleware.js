import jwt from "jsonwebtoken";

export default function jwtAuth(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Unauthorized User");
  }

  try {
    const payload = jwt.verify(token, "FAU2McwhilVQHuv7vyIVxpb335HhvhzI");
    console.log(payload);
    req.userId = payload.userId;
  } catch (err) {
    return res.status(401).send("unAuthorized User");
  }

  next();
}
