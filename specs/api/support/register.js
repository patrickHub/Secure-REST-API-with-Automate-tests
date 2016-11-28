var apiPrefix = "http:/localhost:3000";
var api = require("supertest-as-promised")(apiPrefix);
var Chance = require("chance");
var chance = new Chance();

function register(user){
    return api
        .post('/register')
        .set('Content-Type', 'application/json')
        .send(user)
        .then(function(response){
            return response;
        });
}

function generateUser(){
    return {
        username: chance.guid(),
        firstName: chance.first(),
        lastName: chance.last(),
        password: "myvoiceismypassword"
    }
}

module.exports = {
    generateUser: generateUser,
    register: register
}