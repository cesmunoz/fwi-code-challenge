import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

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

export default mongoose.model("Player", PlayerSchema);
