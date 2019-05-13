import { Request, Response } from "express";
import Player from "../models/playerModel";

export class PlayerService {
  public async get() {
    let players;
    players = await Player.find();
    return players;
  }

  public async getById(id: number) {
    return await Player.findById(id);
  }

  public async post(req: Request) {
    const model = new Player({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      hometown: req.body.hometown,
      country: req.body.country
    });

    const result = await model.save();
    return result;
  }

  public async put(req: Request) {
    return await Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
  }

  public async deleteById(id: number) {
    return await Player.findByIdAndDelete({ _id: id });
  }
}
