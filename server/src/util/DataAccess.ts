import mongoose from "mongoose";

const connectionString =
  process.env.DB_CONNECTION || "mongodb://localhost:27017/";
const databaseName = process.env.DB_NAME || "fwidb";

class DataAccess {
  static instance: any;
  static connection: mongoose.Connection;

  constructor() {
    DataAccess.connect();
  }

  static async connect(): Promise<mongoose.Connection> {
    if (this.instance) {
      return this.instance;
    }

    this.connection = mongoose.connection;
    this.connection.once("open", () => {
      console.log("Connect to mongo database");
    });

    this.instance = await mongoose.connect(
      `${connectionString}${databaseName}`
    );
    return this.instance;
  }
}

DataAccess.connect();
export = DataAccess;
