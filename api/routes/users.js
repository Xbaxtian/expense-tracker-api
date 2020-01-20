const UserService = require('../../services/user-service');
const route = require('express').Router();

const userValidationRules = require('../middlewares/validations/user-validator');
const loginValidationRules = require('../middlewares/validations/login-validator');
const validate = require('../middlewares/validator');

const passport = require('../middlewares/passport');

route.get(
  '/',
  async (req, res, next) => {    
    try {
      const { users } = await UserService.getAll();
      return res.json(users).status(200);
    } catch (e) {
      return next(e);
    }
  }
);

route.post(
  '/signup',
  userValidationRules(),
  validate,
  async (req, res, next) => {
    try {
      const userDTO = req.body;
      const { user } = await UserService.signUp(userDTO);
      return res.json(user).status(201);
    } catch(e) {
      return next(e);
    }
  }
);

route.post(
  '/login',
  loginValidationRules(),
  validate,
  passport.initialize(),
  passport.authenticate('local'),
  (req, res, next) => {
    console.log('hola');
    res.json();
  }
);

module.exports = route;
