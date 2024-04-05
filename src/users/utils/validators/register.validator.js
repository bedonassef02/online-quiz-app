const { body } = require('express-validator');
const { handleValidationErrors } = require('../../../utils/middlewares/validation-utils.middleware');
const usersService = require('../../user.service');

exports.validateUserRegistration = [
  // Validate email
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .custom(async (email) => {
      const user = await usersService.findByEmail(email);
      if (user) {
        throw new Error('Email already in use');
      }
      // Indicate the field is valid
      return true;
    }),

  // Validate password
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  handleValidationErrors,
];
