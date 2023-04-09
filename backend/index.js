const express = require("express");
const app = express();
const config = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

// db connection
require('./db/mongoose');

// parsers 
// content-type: application/json
app.use(bodyParser.json());

//fix CORS
app.use(cors());

// routes
app.use('/api/', apiRouter);

// server
app.listen(config.port, function () {
  console.log("Listening on port " + config.port);
});
