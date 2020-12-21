import User from "./userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (mail, name, surname, password) => {
  const isRegistered = await User.findOne({ mail });
  if (isRegistered) {
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = new User({ mail, name, surname, password: hashedPassword });
  await user.save();
};
