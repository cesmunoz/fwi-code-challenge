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

  public static async connect(): Promise<mongoose.Connection> {
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

    let connectionDBString = `${connectionString}/${databaseName}`;
    if (process.env.NODE_ENV === "test") {
      const server = await MongoMemoryServer.create({
        instance: {
          port: 50862
        }
      });
      connectionDBString = await server.getUri();
    }

    this.instance = await mongoose.connect(`${connectionDBString}`, {
      useNewUrlParser: true
    });
    return this.instance;
  }

  public static async disconnect(): Promise<void> {
    await this.connection.close();
  }
}

DataAccess.connect();
export = DataAccess;
