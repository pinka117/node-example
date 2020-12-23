import express from "express";
import userRequestSchema from './userRequestSchema.json';

import { createUser } from "./userService.js";
import expressJsonSchema from 'express-jsonschema';
var validate = expressJsonSchema.validate;



const router = new express.Router();

router.post("/signup", validate({body: userRequestSchema}), async (req, res) => {
  const { mail, name, surname, password } = req.body;
  try {
    await createUser(mail, name, surname, password);
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error.message || "Unable to signup");
  }
});
export default router;
