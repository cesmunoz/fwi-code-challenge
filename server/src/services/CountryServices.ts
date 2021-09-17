import { injectable } from "inversify";
import { inject } from "inversify";
import TYPES from "../constants/Types";
import { CountryModel } from "../models/Country";
import CountryRepository = require("../repository/CountryRepository");

@injectable()
export class CountryService {
  private repository: CountryRepository;

  public constructor(
    @inject(TYPES.CountryRepository) repository: CountryRepository
  ) {
    this.repository = repository;
  }

  public async get(): Promise<CountryModel[]> {
    return this.repository.getAll({
      description: "asc"
    });
  }
}
