const route = require('express').Router();
const { Account } = require('../../models');

module.exports = (app) => {
  app.use('/accounts', require('../middlewares/check-authentication'), route)

  route.get('/', async (req, res, next) => {
    res.json(await req.user.getAccounts());
  });

  route.post('/add', async (req, res, next) => {
    const account = await Account.create(req.body); 
    req.user.addAccount(account);
    res.json(account)
  })

  route.post('/delete/:id', async(req, res, next) => {
    const account = await Account.findByPk(req.params.id);
    const msg = await account.destroy();

    res.json(msg);
  })
}