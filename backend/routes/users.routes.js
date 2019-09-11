
const express = require("express");
const usersRouter = express.Router();
const usersController = require('../controllers/user.controller');

usersRouter.get('/',usersController.getUser);

module.exports.usersRouter = usersRouter;
