import express from "express";
import swaggerUi from "swagger-ui-express";
import passport from "passport";
import session from "express-session";
import redis from "redis";
import store from "connect-redis";

import userRouter from "./routes/user/userRouter.js";

import { config } from "./configuration/env.js";

import jsonSchemaValidationErrorMiddleware from "./middleware/jsonSchemaValidatorErrorMiddleware.js";

import swaggerDoc from "./dist/swagger.json";

import "./utils/passport.js";

const app = express();

app.use(express.json());

const RedisStore = store(session);
const redisClient = redis.createClient();

app.use(
  session({
    secret: config.redis.secret,
    store: new RedisStore({
      client: redisClient,
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

if(config.isLocalhost) {
  app.use("/api-docs", swaggerUi.serve);
  app.get("/api-docs", swaggerUi.setup(swaggerDoc));
}

app.use("/api/user", userRouter);

app.use(jsonSchemaValidationErrorMiddleware);

export default app;
