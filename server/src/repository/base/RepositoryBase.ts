import { Types, Document, Model } from "mongoose";
import { Repository } from "../interfaces/IRepository";
import { injectable, unmanaged } from "inversify";

@injectable()
export class RepositoryBase<T extends Document> implements Repository<T> {
  private model: Model<T>;

  public constructor(@unmanaged() schemaModel: Model<T>) {
    this.model = schemaModel;
  }

  public async getAll(sort: any = {}, find: any = {}): Promise<T[]> {
    return await this.model
      .find(find)
      .sort(sort)
      .collation({ locale: "en_US", numericOrdering: true });
  }

  public async get(_id: string): Promise<T> {
    const id = Types.ObjectId(_id);
    return await this.model.findById(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async insert(item: any): Promise<T> {
    return await this.model.create(item);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async update(_id: any, item: T): Promise<T> {
    const filter = { _id };
    return await this.model.findOneAndUpdate(filter, item, { new: true });
  }

  public async delete(_id: string): Promise<T> {
    return await this.model.findByIdAndDelete({ _id: _id });
  }
}
