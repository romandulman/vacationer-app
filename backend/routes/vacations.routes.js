const express = require("express");
const vacationsRouter = express.Router();
const vacationsController = require("../controllers/vacations.controller");
const adminCheck = require("../middlewares/adminSection");
const userCheck = require("../middlewares/userSection");

/* Vacations CRUD operations routes*/
vacationsRouter.get("/", userCheck, vacationsController.getAllVacations);
vacationsRouter.get("/:id", adminCheck, vacationsController.getSingleVacation);
vacationsRouter.post("/", adminCheck, vacationsController.newVacation);
vacationsRouter.delete("/:id", adminCheck, vacationsController.deleteVacation);
vacationsRouter.put("/:id", adminCheck, vacationsController.updateVacation);

/*Vacation Follow/Unfollow operations routes*/
vacationsRouter.post("/follow/:id", userCheck, vacationsController.followVacation);
vacationsRouter.put("/follow/:id", userCheck, vacationsController.unfollowVacation);

/*Get all Vacations followers count route*/
vacationsRouter.get("/reports", adminCheck, vacationsController.getFollowersData);

module.exports.vacationsRouter = vacationsRouter;
