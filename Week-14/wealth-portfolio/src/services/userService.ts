import User, { IUser } from "../models/user";

import { generateJWT } from "./tokenService";

export const getUserByEmail = async (email: string) => {
  try {
    const response = await User.findOne({ email });
    return response;
  } catch (ex) {
    console.log(ex);
  }
};

export const createUser = async (userDTO: IUser) => {
  const user = new User({ ...userDTO });
  return await user.save();
};

export const login = async (email: string, password: string) => {
  const user: any = await getUserByEmail(email);
  if (user && (await user?.isPasswordMatch(password))) {
    return generateJWT(user._id);
  }
  return false;
};
