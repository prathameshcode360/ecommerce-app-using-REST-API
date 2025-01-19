import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";

function connectMongoDb() {
  MongoClient.connect(url)
    .then((client) => {
      console.log("connection sucessfull");
    })
    .catch((err) => {
      console.error("connection error occures:", err);
    });
}
export default connectMongoDb;
