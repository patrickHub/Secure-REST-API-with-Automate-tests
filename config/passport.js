var config = require('./config.js');
var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var Extractjwt = require('passport-jwt').ExtractJwt;

var opts = {};

opts.jwtFromRequest = Extractjwt.fromAuthHeaderWithScheme("Bearer");
opts.secretOrKey = config.jwtsecret;
passport.use(new jwtStrategy(opts, function(jwt_payload, done){
    console.log("Using JSON web Token passport strategy to authenticate " + jwt_payloa);
    done(null, {name: "Patrick"});
}));

module.exports = passport;