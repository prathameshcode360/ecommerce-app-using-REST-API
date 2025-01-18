import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomdb";
let client;
export function connectToMongoDb() {
  MongoClient.connect(url)
    .then((clientInstance) => {
      client = clientInstance;
      console.log("Mongodb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDb() {
  return client.db();
}
