import mongoose, { Schema } from "mongoose";
import DataAccess = require("../util/DataAccess");

const Connection = DataAccess.connection;

export interface IPlayerModel extends mongoose.Document {
  firstname: string;
  lastname: string;
  hometown: string;
  country: string;
}

const PlayerSchema = new Schema({
  firstname: {
    type: String,
    required: "Enter a first name"
  },
  lastname: {
    type: String,
    required: "Enter a last name"
  },
  hometown: {
    type: String,
    required: "Enter a hometown"
  },
  country: {
    type: String,
    required: "Enter a country"
  }
});

export default Connection.model<IPlayerModel>("Player", PlayerSchema);
