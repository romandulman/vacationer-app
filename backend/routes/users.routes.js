const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/user.controller");

usersRouter.post("/login", usersController.userLogin);
module.exports.usersRouter = usersRouter;
