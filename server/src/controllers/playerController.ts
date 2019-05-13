import { Request, Response } from "express";
import { PlayerService } from "../services/playerServices";
import { HttpException } from "../util/httpException";

export class PlayerController {
  public async get(req: Request, res: Response) {
    const service = new PlayerService();
    const result = await service.get();
    return res.status(200).json(result);
  }

  public async getById(req: Request, res: Response) {
    const service = new PlayerService();
    const result = await service.getById(req.params.id);
    return res.status(200).json(result);
  }

  public async post(req: Request, res: Response) {
    const service = new PlayerService();
    const result = await service.post(req);

    res.set(
      "Location",
      `${req.protocol}://${req.get("host")}/players/${result.id}`
    );

    return res.status(201).json({
      id: result.id,
      message: "Player created successfully"
    });
  }

  public async put(req: Request, res: Response) {
    const service = new PlayerService();
    const result = await service.put(req);

    if (!result) {
      throw new HttpException(404, "Player not found");
    }

    res.status(200).json({
      id: req.params.id,
      message: "Player updated successfully"
    });
  }

  public async deleteById(req: Request, res: Response) {
    const service = new PlayerService();
    const result = await service.deleteById(req.params.id);

    if (!result) {
      throw new HttpException(404, "Player not found");
    }

    return res.status(200).json({
      id: req.params.id,
      message: "Player delete successfully"
    });
  }
}
