import * as mongoose from "mongoose";

export interface Repository<T> {
  getAll: () => Promise<T[]>;
  get: (id: string) => Promise<T>;
  insert: (item: T) => Promise<T>;
  update: (_id: string, item: T) => Promise<T>;
  delete: (_id: string) => Promise<T>;
}
