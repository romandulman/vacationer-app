'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
//const vacationsRouter = require('./routes/vacations.routes');
//const usersRouter = require('./routes/users.routes');
const router = require('./routes/index');
const db = require('./models').sequelize;
const helmet = require('helmet');
const passport = require('passport');
require('./config/passport.config');

const app = express();
app.use(cors());

// Security
app.use(helmet());
// Sequalize connection
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        //db.sync()
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/vacations', route);
app.use('/users', router.usersRouter);
app.use('/vacations', router.vacationsRouter);

module.exports = app;
