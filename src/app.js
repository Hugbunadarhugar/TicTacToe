// app.js

const express = require("express");
const app = express();
const path = require("path");
const api = require("./server/api");

// Serve static files
app.use(express.static(path.join(__dirname, "../", "dist")));

// For all queries to localhost:3000/api/...
// use the API router (see below)
app.use("/server", api);

// For any other route (URL) just send an error
app.get("*", (req, res) => {
  res.status(404).send({ error: "No route defined" });
});

app.set("json spaces", 2);

module.exports = app;