const { body } = require('express-validator');

const userValidationRules = () => {
  return [
    body('email').isEmail(),
    body('password').exists(),
  ]
}

module.exports = userValidationRules;