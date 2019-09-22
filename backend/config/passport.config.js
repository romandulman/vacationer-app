const passport = require('passport');
const model = require('../models');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, cb) {
        console.log(username, password);

        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return model.User.findOne({where: {username: 'roman'}})
            .then(user => {
                console.log(user)
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }
                return cb(null, user, {message: 'Logged In Successfully'});
            })
            .catch(err => cb(err));
    }
));
