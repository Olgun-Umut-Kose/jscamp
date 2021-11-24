import UserInMemoryDataAccess from "../dataAccess/userInMemoryDataAccess.js";

export const getUserInMemoryDalInstance = () => {
    let instance = undefined;
    return instance || (instance = new UserInMemoryDataAccess());
  };