const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const sqlServer = require('./config/mysql');
const vacationsRouter = require('./routes/vacations');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.

app.use('/vacations', vacationsRouter);
app.use('/users', usersRouter);

module.exports = app;
