const User = require('../../models').User;
const route = require('express').Router();

const userValidationRules = require('../middlewares/validations/user-validator');
const validate = require('../middlewares/validator');

const bcrypt = require('bcrypt');

route.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      console.log(users);
      res.json(users).status(200);
    })
    .catch(err => {
      console.log("Error: " + err);
      res.sendStatus(500);
    });
});

route.post('/store', userValidationRules(), validate, async (req, res) => {
  const userDTO = req.body;

  const user = User.build(userDTO);

  user.password = await bcrypt.hash(user.password, 10);
  await user.save();

  res.json(user.toJSON());
})

module.exports = route;
