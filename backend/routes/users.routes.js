const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/user.controller");

/// User Routes ///

 /* Check Username if exists */
usersRouter.get("/register/checkname/:username", usersController.nameCheck);

/* Users Login/Register Routes */
usersRouter.post("/login", usersController.userLogin);
usersRouter.post("/register", usersController.userRegister);

module.exports.usersRouter = usersRouter;
