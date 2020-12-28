import express from "express";
import swaggerUi from "swagger-ui-express";
import passport from "passport";
import session from "express-session";

import userRouter from "./routes/user/userRouter.js";

import jsonSchemaValidationErrorMiddleware from "./middleware/jsonSchemaValidatorErrorMiddleware.js";

import swaggerDoc from "./dist/swagger.json";

import "./utils/passport.js";

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "localsessionsecret",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDoc));

app.use("/api/user", userRouter);

app.use(jsonSchemaValidationErrorMiddleware);

export default app;
