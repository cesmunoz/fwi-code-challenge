import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => res.status(200).send('Welcome to FWI API'));

export default app;
