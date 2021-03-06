const model = require("../models");
var multer = require('multer');

/*Multer config*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //Date.now() + '-' +
    }
});
var upload = multer({storage: storage}).single('imageFile');


// Get all vacations operation controller*/
exports.getAllVacations = async (req, res) => {
    try {
        await model.Vacations.findAll({raw: true}).then(vacations => {
            res.status(201).send(vacations);
        });
    } catch (e) {
        res.status(500).send(e)
    }
};


/*Create new vacation operation controller*/
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


/*Get single vacation for edit controller*/
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


/* Delete vacation operation controller*/
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


/*Update Vacation operation controller*/
exports.updateVacation = (req, res) => {
    upload(req, res, async err => {
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
                    returning: true,
                    plain: true
                });

            res.status(201)
        } catch (e) {
            res.status(500).send(e)
        }
    })

};

/*Get all follow data from Follows table for the Specific User that logged in -> will send his all follows*/
exports.getFollowersData = async (req,res)=>{
        await model.Follow.findAll({ where: {userid: req.user.id}}
        ).then(follows => {
            res.status(201).send(follows);
        });
};

/*Follow operation controller: create new record in the Follow table and update Vacations table */
exports.followVacation = async (req, res) => {
    try {
        await model.Follow.create({
          vacationid: req.params.id,
          userid: req.user.id
        }).then(createdRecord => {
            model.Vacations.update({
                followerscount: req.body.followerscount +1
                },
                {
                    where: {id: req.params.id},
                    returning: true,
                    plain: true
                });

            res.status(201).send({createdRecord})
        })
    } catch (e) {
        res.status(500).send(e)
    }
};


/*UnFollow operation controller: Delete from the Follow table and update Vacations table */
exports.unfollowVacation = async (req, res) => {
    try {
        await model.Follow.destroy({
            where: {
                vacationid: req.params.id
            }
        })
            .then(updatedRecord=>{
                model.Vacations.update({
                        followerscount: req.body.followerscount -1
                    },
                    {
                        where: {id: req.params.id},
                        returning: true,
                        plain: true
                    });
                res.status(201).send({updatedRecord})
            })
    } catch (e) {
        res.send(500)
    }
};


/*Get all followers data from all vacations -> will send all the records*/
exports.getFollowersDataCountData = async(req,res)=>{
    try {
        await model.Vacations.findAll({raw: true}).then(vacations => {
            res.status(201).send(vacations);
        });
    } catch (e) {
        res.status(500).send(e)
    }
};


