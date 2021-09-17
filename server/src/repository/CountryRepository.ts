import { RepositoryBase } from "./base/RepositoryBase";
import Country, { CountryModel } from "../models/Country";

class CountryRepository extends RepositoryBase<CountryModel> {
  public constructor() {
    super(Country);
  }
}

Object.seal(CountryRepository);
export = CountryRepository;
