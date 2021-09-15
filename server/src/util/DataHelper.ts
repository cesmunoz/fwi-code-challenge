export class DataHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static async checkData(connection: any): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const countries = require("./mock/countries.json");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const players = require("./mock/players.json");

    const countryCollection = await connection.db
      .listCollections({
        name: "countries"
      })
      .next();

    if (!countryCollection) {
      await connection.db.collection("countries").insertMany(countries);
    }

    const playerCollection = await connection.db
      .listCollections({
        name: "players"
      })
      .next();

    if (!playerCollection) {
      // eslint-disable-next-line
      players.forEach((player: any) => {
        const country = countries[Math.floor(Math.random() * countries.length)];
        player.country = country._id;
      });

      await connection.db.collection("players").insertMany(players);
    }
  }
}
