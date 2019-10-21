const model = require("../models");
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname ) //Date.now() + '-' +
  }
});
var upload = multer({ storage: storage }).single('imageFile')

exports.newVacation = (req, res) => {
    upload(req, res,   async err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

   console.log(req.body.from)
           await   model.Vacations.create({
                    description: req.body.description,
                    destination: req.body.destination,
                    image: `uploads/${req.file.originalname}`,
                    from: req.body.fromDate,
                    to: req.body.toDate,
                    price: req.body.price,
                    followerscount: 0,
            })
    })
   // return
};



exports.getAllVacations = async (req, res) => {
  try {
   await model.Vacations.findAll({ raw: true }).then(vacations => {
      res.send(vacations);
    });
  } catch (e) {}
};


exports.getSingleVacation = async (req, res) => {
  try {
    console.log(req.params.id);
 const record =  await model.Vacations.findOne({
      where: {
        id: req.params.id
      }
    });
      res.status(201).send(record);
  } catch (e) {
res.status(404)
  }
};



exports.deleteVacation = async (req, res) => {

    await   model.Vacations.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(201)
};

exports.editVacation = (req, res) => {

    exports.newVacation = (req, res) => {
        upload(req, res,   async err => {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }

            console.log(req.body.from)
            await   model.Vacations.create({
                description: req.body.description,
                destination: req.body.destination,
                image: `uploads/${req.file.originalname}`,
                from: req.body.fromDate,
                to: req.body.toDate,
                price: req.body.price,
                followerscount: 0,
            });
            res.status(201)
        })
        // return
    };

};


exports.followVacation = async (req, res) => {

};

exports.unfollowVacation = async (req, res) => {

};
