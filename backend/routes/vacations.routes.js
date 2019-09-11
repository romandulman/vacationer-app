const express = require("express");
const vacationsRouter = express.Router();
const vacationsController = require('../controllers/vacations.controller');

vacationsRouter.get('/',vacationsController.getAllVacations);

module.exports.vacationsRouter = vacationsRouter;
