const model = require('../models');

exports.getAllVacations =  async (req,res) =>{
const vacations = await model.Vacations.findAll( {raw: true,});
 res.send(vacations)

};

exports.newVacation = async (req,res) =>{

    res.send("")
};
exports.deleteVacation = async (req,res) =>{

};

exports.editVacation = async (req,res) =>{

};
