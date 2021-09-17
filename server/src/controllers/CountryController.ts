import { controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import { CountryService } from "../services/CountryServices";
import TYPES from "../constants/Types";
import { CountryModel } from "../models/Country";

@controller("/countries")
export class CountryController {
  private service: CountryService;

  public constructor(@inject(TYPES.CountryService) service: CountryService) {
    this.service = service;
  }

  @httpGet("/")
  public async get(): Promise<CountryModel[]> {
    return this.service.get();
  }
}
