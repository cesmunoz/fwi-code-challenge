import request from "supertest";
import { createDB, destroyDB } from "./test-helper";
import app from "../server/app";
import Player from "../models/playerModel";

const baseUrl = "/players";

describe("Players API", () => {
  beforeAll(async () => {
    await createDB();

    // eslint:disable-next-line
    const players = require("./mock/players.json");
    await Player.collection.insertMany(players);
  });

  afterAll(() => {
    destroyDB();
  });

  it("Get players", async done => {
    const response = await request(app).get("/players");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(4);

    done();
  });
});
