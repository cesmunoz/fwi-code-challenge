import "reflect-metadata";
import * as bodyParser from "body-parser";
import { Container } from "inversify";
import { PlayerService } from "./services/PlayerServices";
import { InversifyExpressServer, interfaces } from "inversify-express-utils";
import TYPES from "./constants/Types";
import DataAccess = require("./util/DataAccess");
import "./controllers/PlayerController";
import PlayerRepository = require("./repository/PlayerRepository");
import { RepositoryBase } from "./repository/base/RepositoryBase";
import Player, { IPlayerModel } from "./models/Player";
import { IRepository } from "./repository/interfaces/IRepository";

const port = process.env.PORT || 8000;

const container = new Container();
container.bind<DataAccess>(TYPES.DataAccess).to(DataAccess);
container.bind<PlayerService>(TYPES.PlayerService).to(PlayerService);
container.bind<PlayerRepository>(TYPES.PlayerRepository).to(PlayerRepository);

const server = new InversifyExpressServer(container);
server.setConfig(app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
});

const app = server.build();
app.listen(port, () => console.log(`Server listening on port ${port}`));

exports = module.exports = app;
