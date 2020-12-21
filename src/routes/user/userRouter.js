import express from "express";
import expressJoi from 'express-joi-validation'
import bodyRequestSchema from "./userRequest.js";
const validator = expressJoi.createValidator()


const router = new express.Router();

router.post("/signup",validator.body(bodyRequestSchema), async (req, res) => {

    res.status(200).send();

});
export default router;