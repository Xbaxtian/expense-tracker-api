const user = require('./routes/users');
const account = require('./routes/accounts');
const categories = require('./routes/categories');
const expenses = require('./routes/expenses');

// guaranteed to get dependencies
module.exports = () => {
  const app = require('express').Router();
  user(app);
  account(app);
  categories(app);
  expenses(app);

  return app
}