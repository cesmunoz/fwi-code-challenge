import express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import router from "./router";
import * as mongoose from "mongoose";

const app = express();

// Database
console.log("AAA");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "test") {
  mongoose.connect("mongodb://localhost/fwidb");
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) =>
  res.status(200).send("Welcome to Fourwinds Interactive API")
);

app.use("/", router);

app.use((req: Request, res: Response) =>
  res.status(404).send("Sorry, page not found!")
);

export default app;
