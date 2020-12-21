import mongoose from "mongoose";

export const connectToDB = () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/example",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
