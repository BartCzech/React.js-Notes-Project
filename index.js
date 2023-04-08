const express = require("express");
const app = express();
const config = require('./config');

app.get("/", function (req, res) {
  res.send("Server running");
});

app.listen(config.port, function () {
  console.log("Listening on port " + config.port);
});
