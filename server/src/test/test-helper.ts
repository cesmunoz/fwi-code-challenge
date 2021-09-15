import { MongoMemoryServer } from "mongodb-memory-server";
import DataAccess = require("../util/DataAccess");

export const createDB = async (): Promise<void> => {
  try {
    const server = await MongoMemoryServer.create();
    const url = await server.getUri();
    DataAccess.connect(url);
  } catch (err) {
    throw err;
  }
};

export const destroyDB = async (): Promise<void> => {
  await DataAccess.disconnect();
};
