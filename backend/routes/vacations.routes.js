const express = require("express");
const vacationsRouter = express.Router();
const vacationsController = require('../controllers/vacations.controller');
const adminCheck = require('../middlewares/adminSection');
const userCheck = require('../middlewares/userSection');
const passport = require('passport')
require('../config/passport.config');

vacationsRouter.get('/', vacationsController.getAllVacations);//userCheck,vacationsController.getAllVacations);
vacationsRouter.get('/:id', vacationsController.getSingleVacation);//userCheck,vacationsController.getAllVacations);

vacationsRouter.post("/",adminCheck, vacationsController.newVacation);

vacationsRouter.delete('/',adminCheck, vacationsController.deleteVacation);

vacationsRouter.put('/',adminCheck, vacationsController.editVacation);


module.exports.vacationsRouter = vacationsRouter;
