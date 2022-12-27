const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const config = require('./config');
//JWT Passport Strategy
const opts = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: config.jwt.secret,
};

const VerifyCallback = async (token, done) => {
   console.log(token);
   await User.findOne({ _id: token.sub })
   .then((user) => {
      if (user) {
         return done(null, user);
      } else {
         return done(null, false);
      }
   })
   .catch(err => done(err, false));
}

const jwtStrategy = new JwtStrategy(opts, VerifyCallback);

module.exports = jwtStrategy;