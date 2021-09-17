import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  httpDelete
} from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response } from "express";
import { PlayerService } from "../services/PlayerServices";
import TYPES from "../constants/Types";
import Player, { PlayerModel } from "../models/Player";

@controller("/players")
export class PlayerController {
  private service: PlayerService;

  public constructor(@inject(TYPES.PlayerService) service: PlayerService) {
    this.service = service;
  }

  @httpGet("/")
  public async get(): Promise<PlayerModel[]> {
    return this.service.get();
  }

  @httpGet("/:id")
  public async getById(req: Request): Promise<PlayerModel> {
    return this.service.getById(req.params.id);
  }

  @httpPost("/")
  public async post(req: Request, res: Response): Promise<void> {
    const body = req.body;
    if (
      !body.firstname ||
      !body.lastname ||
      !body.hometown ||
      !body.country ||
      !body.winnings
    ) {
      res.status(400).json({
        status: 400,
        message: "Missing some fields"
      });
    }

    const model = new Player({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      hometown: req.body.hometown,
      country: req.body.country,
      winnings: req.body.winnings
    });

    const result = await this.service.post(model);
    res.status(201).json(result);
  }

  @httpPut("/:id")
  public async put(req: Request): Promise<PlayerModel> {
    const model = new Player({
      _id: req.params.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      hometown: req.body.hometown,
      country: req.body.country,
      winnings: req.body.winnings
    });
    return this.service.put(req.params.id, model);
  }

  @httpDelete("/:id")
  public async deleteById(req: Request, res: Response): Promise<void> {
    this.service.deleteById(req.params.id);
    res.status(204);
  }
}
