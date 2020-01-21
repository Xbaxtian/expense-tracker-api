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
      return res.json(users);
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
      return res.status(201).json(user);
    } catch(e) {
      return next(e);
    }
  }
);

route.use(
  passport.initialize(),
  passport.session()
);

route.post(
  '/login',
  loginValidationRules(),
  validate,
  passport.authenticate('local'),
  (req, res) => {
    res.json(req.user);
  }
);

route.get(
  '/logout',
  (req, res) => {
    req.logout();
    res.json({message: 'success'});
  }
);

route.get(
  '/:id',
  require('../middlewares/check-authentication'),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = route;
