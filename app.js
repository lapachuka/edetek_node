'use strict';
const express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

express.app = app;

app.use(morgan('dev')); // log every request to the console

app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

app.use(require('./src/routes.js'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});