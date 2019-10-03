const BCRYPT_SALT_ROUNDS = 12;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const jwtSecret = require("./jwt-config");
const model = require("../models");

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    (username, password, done) => {
      try {
        model.User.findOne({
          where: {
            username
          }
        }).then(user => {
          if (user === null) {
            return done(null, false, { message: "bad username" });
          }
          /*bcrypt.compare(password, user.password).then(response => {
                        if (response !== true) {
                            console.log('passwords do not match');
                            return done(null, false, { message: 'passwords do not match' });
                        }
                        console.log('user found & authenticated');*/
          if (!user || password !== user.password) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          // return cb(null, {user: user.username}, {message: 'Logged In Successfully'}); //{user}
          return done(null, user);
          // });
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret
};

passport.use(
  "jwt",
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      model.User.findOne({
        where: {
          id: jwt_payload.id
        }
      }).then(user => {
        if (user) {
          console.log("user found in db in passport");
          done(null, user);
        } else {
          console.log("user not found in db");
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
