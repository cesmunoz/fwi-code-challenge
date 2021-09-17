import express, { Request, Response } from "express";
import "reflect-metadata";
import { Container } from "inversify";
import { PlayerService } from "./services/PlayerServices";
import { CountryService } from "./services/CountryServices";
import { InversifyExpressServer } from "inversify-express-utils";
import TYPES from "./constants/Types";
import DataAccess = require("./util/DataAccess");
import "./controllers/PlayerController";
import "./controllers/CountryController";
import cors from "cors";
import dotenv from "dotenv";
import PlayerRepository = require("./repository/PlayerRepository");
import CountryRepository = require("./repository/CountryRepository");

dotenv.config();

const port = process.env.PORT || 8000;

const container = new Container();
container.bind<DataAccess>(TYPES.DataAccess).to(DataAccess);
container.bind<PlayerService>(TYPES.PlayerService).to(PlayerService);
container.bind<PlayerRepository>(TYPES.PlayerRepository).to(PlayerRepository);
container.bind<CountryService>(TYPES.CountryService).to(CountryService);
container
  .bind<CountryRepository>(TYPES.CountryRepository)
  .to(CountryRepository);

const server = new InversifyExpressServer(container);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
server.setConfig(app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(cors());

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  app.get("/", (_req: Request, res: Response) =>
    res.status(200).send("Welcome to FWI Code Challenge API")
  );
});

const app = server.build();
app.listen(port, (): void => console.log(`Server listening on port ${port}`));

export default app;
