const bcrypt = require('bcryptjs');
const JwtStrategy = require("passport-jwt").Strategy;
const localStrategy = require('passport-local').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

module.exports = passport => {
  passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        session: false
      },
      (username, password, done) => {
        try {
          User.findById({
            where: {
              username: username,
            },
          }).then(user => {
            if (user === null) {
              return done(null, false, {message:"Username is bad"});
            } else {
              bcrypt.compare(password, user.password).then(response => {
                if(response !== true) {
                  console.log("Passwords don't match.");
                  return done(null, false, {message: "Passwords don't match."});
                }
                console.log("User found & authenticated.");
                return done(null, user);
              });
            }
          });
        } catch(err) {
          done(err);
        }
      },
    ),
  );

  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey,
  };

  passport.use(
    'jwt',
    new JwtStrategy(opts, (jwt_payload, done) => {
      try {
        User.findById(jwt_payload.id)
          .then(user => {
            if (user) {
              console.log("User found in db in passport.");
              done(null, user);
            }
            console.log("User not found in db.");
            done(null, false);
          });
      } catch (err) {
        done(err);
      }
    }),
  );
};