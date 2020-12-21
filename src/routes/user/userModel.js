import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  mail: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
