import httpStatus from "http-status";
import { User } from "../models";

export const getAllUsers = async (req, res) => {
  let  users;
  try {
    const users = await User.findAll();
    res.status(httpStatus.OK).json(users);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: true,
      data: users
    });
  }
};

console.log(User);