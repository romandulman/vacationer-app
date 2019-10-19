const model = require("../models");
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, '../uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file')
exports.newVacation =  (req, res) => {
  //.log('thh',req.body.data.imageFile)
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send('req.body.data.imageFile')

  })
};



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



exports.deleteVacation = async (req, res) => {};

exports.editVacation = async (req, res) => {};
