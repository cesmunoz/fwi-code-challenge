import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import dotenv from "dotenv";
import { DataHelper } from "./DataHelper";

dotenv.config();

const connectionString =
  process.env.DB_CONNECTION || "mongodb://localhost:27017";
const databaseName = process.env.DB_NAME || "fwidb";

class DataAccess {
  public static instance: any;
  public static connection: mongoose.Connection;

  public static async connect(
    connectionString: string
  ): Promise<mongoose.Connection> {
    if (this.instance) {
      return this.instance;
    }

    this.connection = mongoose.connection;
    this.connection.once("open", (): void => {
      console.log("Connect to mongo database");

      if (process.env.NODE_ENV !== "test") {
        DataHelper.checkData(DataAccess.connection);
      }
    });

    if (process.env.NODE_ENV === "test") {
      const server = await MongoMemoryServer.create();
      connectionString = await server.getUri();
    }

    // this.instance = await mongoose.connect(`${connectionString}`, {
    this.instance = await mongoose.connect(`${connectionString}`, {
      useNewUrlParser: true
    });
    return this.instance;
  }

  public static async disconnect(): Promise<void> {
    await this.connection.close();
  }
}

DataAccess.connect(`${connectionString}/${databaseName}`);
export = DataAccess;
