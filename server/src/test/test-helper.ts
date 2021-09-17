import DataAccess = require("../util/DataAccess");

export const createDB = async (): Promise<void> => {
  try {
    DataAccess.connect();
  } catch (err) {
    throw err;
  }
};

export const destroyDB = async (): Promise<void> => {
  await DataAccess.disconnect();
};
