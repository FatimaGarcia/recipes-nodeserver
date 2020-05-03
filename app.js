global.PROPERTIES = require('./config/properties');

const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const indexRouter = require('./routes/index');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRouter);

module.exports = app;
