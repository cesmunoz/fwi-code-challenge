import { injectable } from "inversify";
import { inject } from "inversify";
import Player, { PlayerModel } from "../models/Player";
import TYPES from "../constants/Types";
import PlayerRepository = require("../repository/PlayerRepository");

@injectable()
export class PlayerService {
  private repository: PlayerRepository;

  public constructor(
    @inject(TYPES.PlayerRepository) repository: PlayerRepository
  ) {
    this.repository = repository;
  }

  public async get(): Promise<PlayerModel[]> {
    return this.repository.getAll({
      winnings: "desc"
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async getById(id: any): Promise<PlayerModel> {
    return await this.repository.get(id);
  }

  public async post(player: PlayerModel): Promise<PlayerModel> {
    return await this.repository.insert(player);
  }

  public async put(id: string, player: PlayerModel): Promise<PlayerModel> {
    return await this.repository.update(id, player);
  }

  public async deleteById(id: string): Promise<PlayerModel> {
    return await this.repository.delete(id);
  }
}
