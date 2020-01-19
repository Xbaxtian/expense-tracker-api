const User = require('../../models').User;
const route = require('express').Router();

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

route.post('/store', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

module.exports = route;
