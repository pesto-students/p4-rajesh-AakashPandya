import User, { IUser } from "../models/user";

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
  return user && (await user?.isPasswordMatch(password));
};
