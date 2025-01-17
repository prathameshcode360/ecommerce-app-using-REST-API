import fs from "fs";

const fsPromise = fs.promises;

async function logData(data) {
  try {
    data = `\n${new Date().toString()} logdata: ${data}
`;
    await fsPromise.appendFile("logs.txt", data);
  } catch (err) {
    console.log(err);
  }
}
const loggerMiddleware = async (req, res, next) => {
  const logs = `${req.url}-${JSON.stringify(req.body)}`;
  await logData(logs);
  next();
};
export default loggerMiddleware;
