const { body } = require('express-validator');
const { User } = require('../../../models');

const userValidationRules = () => {
  return [
    body('name').isAlpha(),
    body('lastname').isAlpha(),
    body('email').isEmail()
      .custom(value => {
        if(value)
          return User.findOne({
            where: { email: value }
          }).then(user => {
            if (user) {
              return Promise.reject('E-mail already in use');
            }
          });
      }),
    body('password').isLength({ min: 6 }).withMessage('Must be at least 6 chars long'),
    body('password_confirm').isLength({ min: 6 }).withMessage('must be at least 6 chars long')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }

        return true;
      }),
    body('budget').optional()
      .isNumeric(),
  ]
}

module.exports = userValidationRules;