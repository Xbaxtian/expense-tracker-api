const user = require('./routes/users');

// guaranteed to get dependencies
module.exports = () => {
  const app = require('express').Router();
  user(app);

  return app
}