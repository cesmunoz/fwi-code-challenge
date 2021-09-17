import { RepositoryBase } from "./base/RepositoryBase";
import Player, { PlayerModel } from "../models/Player";

class PlayerRepository extends RepositoryBase<PlayerModel> {
  public constructor() {
    super(Player);
  }
}

Object.seal(PlayerRepository);
export = PlayerRepository;
