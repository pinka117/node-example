import express from "express";
import expressJoi from "express-joi-validation";
import bodyRequestSchema from "./userRequest.js";

import { createUser } from "./userService.js";

const validator = expressJoi.createValidator();

const router = new express.Router();

router.post("/signup", validator.body(bodyRequestSchema), async (req, res) => {
  const { mail, name, surname, password } = req.body;
  try {
    await createUser(mail, name, surname, password);
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error.message || "Unable to signup");
  }
});
export default router;
