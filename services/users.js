import UserModel from "../models/User.js";

export const getAllUsers = async () => {
  try {
    return UserModel.find();
  } catch (err) {
    throw err;
  }
};
