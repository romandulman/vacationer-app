const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/user.controller");

usersRouter.post("/login", usersController.userLogin);
//usersRouter.post("/register", usersController.userRegister)
module.exports.usersRouter = usersRouter;
