// src/server/api.js

const express = require("express");
const router = express.Router();
const ticTacToe = require("../logic/ticTacToe");

router.get("/ticTacToe", (req, res) => {
  res.status(200).send("works");
});

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

module.exports = router;