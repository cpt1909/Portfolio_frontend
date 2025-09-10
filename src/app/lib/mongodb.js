import { MongoClient } from "mongodb";

const url = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(url);
const clientPromise = client.connect();

export default clientPromise;