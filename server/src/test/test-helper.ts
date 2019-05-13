import { MongoMemoryServer } from "mongodb-memory-server";
import * as db from "../util/database";

const server = new MongoMemoryServer();

export const createDB = async () => {
  try {
    const url = await server.getConnectionString();
    db.connect(url);
  } catch (err) {
    throw err;
  }
};

export const destroyDB = async () => {
  db.disconnect();
};
