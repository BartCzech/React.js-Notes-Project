const express = require("express");
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');

// db connection
require('./db/mongoose');

// parsers 
// content-type: application/json
app.use(bodyParser.json());

// routes
const apiRouter = require('./routes/api');

app.use('/api/', apiRouter);

// server
app.listen(config.port, function () {
  console.log("Listening on port " + config.port);
});
