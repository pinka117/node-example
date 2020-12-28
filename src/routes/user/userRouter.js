import express from "express";
import passport from "passport";
import expressJsonSchema from "express-jsonschema";

import { createUser } from "./userService.js";

import userSignupRequestSchema from "./userSignupRequestSchema.json";
import userLoginRequestSchema from "./userLoginRequestSchema.json";


var validate = expressJsonSchema.validate;

const router = new express.Router();

router.post(
  "/signup",
  validate({ body: userSignupRequestSchema }),
  async (req, res) => {
    const { mail, name, surname, password } = req.body;
    try {
      await createUser(mail, name, surname, password);
      res.status(201).send();
    } catch (error) {
      res.status(400).send(error.message || "Unable to signup");
    }
  }
);

router.post(
  "/login",
  validate({ body: userLoginRequestSchema }),
  passport.authenticate("local"),
  async (req, res) => {
    res.send({ user: req.user });
  }
);

export default router;
