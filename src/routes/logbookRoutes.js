import express from "express";

const router = express.Router();

router.get("/helo", (req, res) => {
  res.json({massge: "hello"});
});