var config = require('../../config/config.js');
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var User = mongoose.model('User');
var bcrypt = require('bcrypt-as-promised');

module.exports = function (app){
    app.use('/auth', router);
}

router.post('/', function(req, res, next){
    console.log( "pas ok : " + req.boby);
    var username = req.boby.username;
    var password = req.body.password;

    if(username === undefined || password === undefined){
        return next({status: 401, message: "Please provide credentials"});
    }

    User.findOne({
        'username': username
    })
    .then(function(user){
        if(user === null){
            throw new Error("user does not exist");
        }
        console.log("Found user: " + user);
        return user;
    })
    .then(function(user){
        return bcrypt.compare(password, user.password)
        .then(function(){
            return user;
        })
    })
    .then(function(user){
        var data = {
            "who": user.username,
            "where": "here"
        };
        var token = jwt.sign(data, config.jwtsecret);
        console.log("Issuing web token: " + token);
        res.json(token);
    })
    .catch(function(error){
        console.log("Error: " + error);
        return next({status: 401, message: error.message});
    });
});