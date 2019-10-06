const express = require("express");
const vacationsRouter = express.Router();
const vacationsController = require("../controllers/vacations.controller");
const adminCheck = require("../middlewares/adminSection");
const userCheck = require("../middlewares/userSection");

vacationsRouter.get("/", userCheck, vacationsController.getAllVacations);
vacationsRouter.get("/:id", adminCheck, vacationsController.getSingleVacation);
vacationsRouter.post("/", adminCheck, vacationsController.newVacation);
vacationsRouter.delete("/:id", adminCheck, vacationsController.deleteVacation);
vacationsRouter.put("/:id", adminCheck, vacationsController.editVacation);

module.exports.vacationsRouter = vacationsRouter;
