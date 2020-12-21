import express from "express";

import userRouter from "./routes/user/userRouter.js";

import { connectToDB } from "./utils/db.js";

connectToDB();

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);

export default app;
