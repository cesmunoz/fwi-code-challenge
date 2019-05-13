import * as mongoose from "mongoose";

export const connect = async (database: any) => {
  try {
    const conn = await mongoose.connect(database, { useNewUrlParser: true });

    console.log(`MongoDb Connected on: ${database}`);

    return conn;
  } catch (err) {
    console.log("Error to connect on mongo", err);
  }
};

export const disconnect = async () => await mongoose.connection.close();
