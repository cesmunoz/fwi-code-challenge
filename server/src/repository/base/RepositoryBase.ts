import * as mongoose from "mongoose";
import { IRepository } from "../interfaces/IRepository";
import { inject, injectable, unmanaged } from "inversify";
import { Resolver } from "dns";

@injectable()
export class RepositoryBase<T extends mongoose.Document>
  implements IRepository<T> {
  private model: mongoose.Model<T>;

  constructor(@unmanaged() schemaModel: mongoose.Model<T>) {
    this.model = schemaModel;
  }

  async getAll(): Promise<T[]> {
    return await this.model.find();
  }

  async get(_id: string): Promise<T> {
    return await this.model.findById(_id);
  }

  async insert(item: T): Promise<T> {
    return await this.model.create(item);
  }

  async update(_id: mongoose.Types.ObjectId, item: T): Promise<T> {
    return await this.model.findOneAndUpdate({ _id: _id }, item, {
      new: true
    });
  }

  async delete(_id: string): Promise<T> {
    return await this.model.findByIdAndDelete({ _id: _id });
  }
}
