import request from "supertest";
import { createDB, destroyDB } from "./test-helper";
import Player, { IPlayerModel } from "../models/Player";
import app from "../App";
import { Response } from "express";
import DataAccess = require("../util/DataAccess");
import { RepositoryBase } from "../repository/base/RepositoryBase";

describe("Players API", () => {
  beforeAll(async () => {
    await DataAccess.connect("test");

    // eslint:disable-next-line
    const players = require("./mock/players.json");
    await Player.collection.insertMany(players);
  });

  afterAll(async () => {
    await destroyDB();
  });

  it("Get players successfully", async done => {
    const response = await request(app).get("/players");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(4);

    done();
  });

  it("Post Player successfully", async done => {
    const model = new Player({
      firstname: "Test FistName",
      lastname: "Test LastName",
      hometown: "Test Hometown",
      country: "Test Country"
    });

    const response: any = await request(app)
      .post("/players")
      .send(model);
    const player: any = await request(app).get(`/players/${response.body.id}`);

    expect(response.status).toBe(201);
    expect(response._id).toBe(player._id);
    expect(response.firstname).toBe(player.firstname);
    expect(response.lastname).toBe(player.lastname);
    expect(response.hometown).toBe(player.hometown);
    expect(response.country).toBe(player.country);

    done();
  });

  it("Put Player successfully", async done => {
    const model = new Player({
      firstname: "Test FistName",
      lastname: "Test LastName",
      hometown: "Test Hometown",
      country: "Test Country"
    });

    const responseCreate: any = await request(app)
      .post("/players")
      .send(model);

    const updateModel = new Player({
      _id: responseCreate.body._id,
      firstname: "FistName",
      lastname: "LastName",
      hometown: "Hometown",
      country: "Country"
    });

    const response: any = await request(app)
      .put(`/players/${updateModel._id}`)
      .send(updateModel);

    const player: any = await request(app).get(`/players/${response.body._id}`);

    expect(response.status).toBe(200);
    expect(response._id).toBe(player._id);
    expect(response.firstname).toBe(player.firstname);
    expect(response.lastname).toBe(player.lastname);
    expect(response.hometown).toBe(player.hometown);
    expect(response.country).toBe(player.country);

    done();
  });

  it("Delete Player successfully", async done => {
    const players: any = await request(app).get(`/players`);

    const [player] = players.body;
    const responseDelete: any = await request(app).delete(
      `/players/${player._id}`
    );

    const responseAll: any = await request(app).get(`/players`);

    expect(responseDelete.status).toBe(204);
    expect(responseAll).not.toContain(player);

    done();
  });
});
