const jwt = require("jsonwebtoken");
const passport = require("passport");
const model = require("../models");
const jwtSecret = require("../config/jwt-config");

exports.userLogin = (req, res, next) => {
  passport.authenticate("login", (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === "bad username") {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      req.logIn(users, () => {
        model.User.findOne({
          where: {
            username: req.body.username
          }
        }).then(user => {
          const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            expiresIn: 60 * 60
          });
          res.status(200).send({
            auth: true,
            token,
            message: "user found & logged in",
            profile: user
          });
        });
      });
    }
  })(req, res, next);
};



exports.userRegister = (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
    //  console.error(err);
    }
    if (info !== undefined) {
    //  console.error(info.message);
      res.status(403).send(info.message);
    } else {
      req.logIn(user, error => {
        console.log(user);
        const data = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          username: req.body.username,
        };
        console.log(data);
        model.User.findOne({
          where: {
            username: data.username,
          },
        }).then(user => {
          //console.log(user);
          user
              .update({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
              })
              .then(() => {
               // console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
        });
      });
    }
  })(req, res, next);
};

