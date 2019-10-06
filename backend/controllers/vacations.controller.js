const model = require("../models");

exports.getAllVacations = async (req, res) => {
  try {
    model.Vacations.findAll({ raw: true }).then(vacations => {
      res.send(vacations);
    });
  } catch (e) {}
};
exports.getSingleVacation = (req, res) => {
  try {
    console.log(req.params.id);
    model.Vacations.findOne({
      where: {
        id: req.params.id
      }
    }).then(vacation => {
      res.send(vacation);
    });
  } catch (e) {}
};

exports.newVacation = async (req, res) => {
  res.send("");
};

exports.deleteVacation = async (req, res) => {};

exports.editVacation = async (req, res) => {};
