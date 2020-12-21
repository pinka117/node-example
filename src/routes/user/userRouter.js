import express from "express";

const router = new express.Router();

router.post("/signup", async (req, res) => {

    res.status(200).send();

});
export default router;