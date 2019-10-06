const jwt = require("jsonwebtoken");
const passport = require("passport");
const model = require("../models");
const jwtSecret = require("../config/jwt-config");

exports.userLogin = (req, res, next) => {
  passport.authenticate("login", (err, users, info) => {
    console.log(req.body);
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

exports.userLogout = (req, res) => {
  // model.User.findOne()
};

exports.userRegister = (req, res) => {
  // model.User.findOne()
};
