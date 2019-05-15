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
import { HttpException } from "../util/httpException";
import TYPES from "../constants/Types";
import Player, { IPlayerModel } from "../models/Player";

@controller("/players")
export class PlayerController {
  constructor(@inject(TYPES.PlayerService) private service: PlayerService) {}

  @httpGet("/")
  public async get(req: Request, res: Response): Promise<IPlayerModel[]> {
    return this.service.get();
  }

  @httpGet("/:id")
  public async getById(req: Request): Promise<IPlayerModel> {
    return this.service.getById(req.params.id);
  }

  @httpPost("/")
  public async post(req: Request): Promise<IPlayerModel> {
    const model = new Player({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      hometown: req.body.hometown,
      country: req.body.country
    });

    return this.service.post(model);
    // const result = await this.service.post(req);

    // res.set(
    //   "Location",
    //   `${req.protocol}://${req.get("host")}/players/${result.id}`
    // );

    // return res.status(201).json({
    //   id: result.id,
    //   message: "Player created successfully"
    // });
  }

  @httpPut("/:id")
  public async put(req: Request): Promise<IPlayerModel> {
    const model = new Player({
      _id: req.params.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      hometown: req.body.hometown,
      country: req.body.country
    });
    return this.service.put(req.params.id, model);
    // const result = await this.service.put(req);

    // if (!result) {
    //   throw new HttpException(404, "Player not found");
    // }

    // res.status(200).json({
    //   id: req.params.id,
    //   message: "Player updated successfully"
    // });
  }

  @httpDelete("/:id")
  public async deleteById(req: Request): Promise<IPlayerModel> {
    return this.service.deleteById(req.params.id);
    // const result = await this.service.deleteById(req.params.id);
    // if (!result) {
    //   throw new HttpException(404, "Player not found");
    // }
    // return res.status(200).json({
    //   id: req.params.id,
    //   message: "Player delete successfully"
    // });
  }
}
