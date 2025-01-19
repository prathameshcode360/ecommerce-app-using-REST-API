import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";
let client;
export function connectMongoDb() {
  MongoClient.connect(url)
    .then((clientInstance) => {
      client = clientInstance;
      console.log("connection sucessfull");
    })
    .catch((err) => {
      console.error("connection error occures:", err);
    });
}
export function getDB() {
  return client.db();
}
