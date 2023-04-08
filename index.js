const express = require("express");
const app = express();
const config = require('./config');

// routes
const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

app.listen(config.port, function () {
  console.log("Listening on port " + config.port);
});
