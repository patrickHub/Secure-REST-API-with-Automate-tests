var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'secure-rest-api-with-automated-tests'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:27017/secure-rest-api-with-automated-tests-development',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  test: {
    root: rootPath,
    app: {
      name: 'secure-rest-api-with-automated-tests'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:27017/secure-rest-api-with-automated-tests-test',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  production: {
    root: rootPath,
    app: {
      name: 'secure-rest-api-with-automated-tests'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:21017/secure-rest-api-with-automated-tests-production',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  }
};

module.exports = config[env];
