// import fs from "fs";
import winston from "winston";

// const fsPromise = fs.promises;

// async function logData(data) {
//   try {
//     data = `\n${new Date().toString()} logdata: ${data}
// `;
//     await fsPromise.appendFile("logs.txt", data);
//   } catch (err) {
//     console.log(err);
//   }
// }

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "logging request" },
  transports: [new winston.transports.File({ filename: "winlog.txt" })],
});

const loggerMiddleware = (req, res, next) => {
  const logs = `${req.url}-${JSON.stringify(req.body)}`;
  logger.info(logs);
  next();
};
export default loggerMiddleware;
