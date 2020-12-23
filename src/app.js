import express from "express";
import swaggerUi from 'swagger-ui-express';

import userRouter from "./routes/user/userRouter.js";

import jsonSchemaValidationErrorMiddleware from "./middleware/jsonSchemaValidatorErrorMiddleware.js";

import { connectToDB } from "./utils/db.js";

import swaggerDoc from './dist/swagger.json'

connectToDB();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDoc));

app.use("/api/user", userRouter);

app.use(jsonSchemaValidationErrorMiddleware);

export default app;
