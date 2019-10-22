const model = require("../models");
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //Date.now() + '-' +
    }
});
var upload = multer({storage: storage}).single('imageFile');


exports.getAllVacations = async (req, res) => {
    try {
        await model.Vacations.findAll({raw: true}).then(vacations => {
            res.status(201).send(vacations);
        });
    } catch (e) {
        res.status(500).send(e)
    }
};


exports.newVacation = (req, res) => {
    upload(req, res, async err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        await model.Vacations.create({
            description: req.body.description,
            destination: req.body.destination,
            image: `uploads/${req.file.originalname}`,
            from: req.body.fromDate,
            to: req.body.toDate,
            price: req.body.price,
            followerscount: 0,
        }).then(createdRecord => {
            res.status(201).send({
                id: createdRecord.id,
                description: req.body.description,
                destination: req.body.destination,
                image: `uploads/${req.file.originalname}`,
                from: req.body.fromDate,
                to: req.body.toDate,
                price: req.body.price,
                followerscount: 0,
            })
        })
    });

};


exports.getSingleVacation = async (req, res) => {
    try {
        console.log(req.params.id);
        const record = await model.Vacations.findOne({
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
    try {
        await model.Vacations.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).send({deletedId: req.params.id})
    } catch (e) {
        res.send(500)
    }

};

exports.updateVacation = (req, res) => {

    upload(req, res, async err => {
        console.log(req.body.toDate, req.body.fromDate)
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        try {
            await model.Vacations.update({
                    description: req.body.description,
                    destination: req.body.destination,
                    image: `uploads/${req.file.originalname}`,
                    from: req.body.fromDate,
                    to: req.body.toDate,
                    price: req.body.price,
                },
                {
                    where: {id: req.params.id},
                    returning: true, // needed for affectedRows to be populated
                    plain: true // makes sure that the returned instances are just plain objects
                });

            res.status(201)
        } catch (e) {
            res.status(500).send(e)
        }
    })
    // return
};


exports.followVacation = async (req, res) => {

};

exports.unfollowVacation = async (req, res) => {

};

exports.getFollowersData = async(req,res)=>{

    try {
        await model.Vacations.findAll({raw: true}).then(vacations => {
         //   console.log(vacations)
            res.status(201).send(vacations);
        });
    } catch (e) {
        res.status(500).send(e)
    }

}