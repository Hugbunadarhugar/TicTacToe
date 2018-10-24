/*
const express = require("express");
const app = express();
const greeting = require("./greeting");app.get("/greeting/:name", (req, res) => {
    // Fill in your code that:  
    // 1. set's the status code to 200 
    // 2. and returns an object with the greeting 
    // Hint: `req.params.name`
});

module.exports = app;
*/

// src/api.js
const express = require("express");
const router = express.Router();
const greeting = require("./ticTacToe");

router.get("/greeting/:name", (req, res) => {
  res.status(200).send({ greeting: greeting(req.params.name) });
});

module.exports = router;