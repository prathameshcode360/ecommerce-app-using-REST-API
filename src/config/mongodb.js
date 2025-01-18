import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomdb";

function connectToMongoDb() {
  MongoClient.connect(url)
    .then((client) => {
      console.log("Mongodb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
}
export default connectToMongoDb;
