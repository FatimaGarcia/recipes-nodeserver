global.PROPERTIES = require('./config/properties');

const express = require('express');
const bodyParser = require("body-parser");

const indexRouter = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRouter);

module.exports = app;
