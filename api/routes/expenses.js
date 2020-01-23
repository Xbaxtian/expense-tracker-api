const route = require('express').Router();
const { Expense } = require('../../models');

module.exports = (app) => {
  app.use('/expenses', require('../middlewares/check-authentication'), route)

  route.get('/', async (req, res, next) => {
    const accounts = await req.user.getAccounts();

    const expenses = await Promise.all(accounts.map(async account => {
      return {
        ...account.toJSON(),
        expenses: await account.getExpenses()
      };
    }))

    res.json(expenses);
  });

  route.post('/add', async (req, res, next) => {
    try {
      const expense = await Expense.create(req.body);

      res.json(expense.toJSON());
    } catch(error) {
      next(error);
    }
  });
}