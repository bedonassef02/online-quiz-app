const { body } = require('express-validator');
const { handleValidationErrors } = require('../../../utils/middlewares/validation-utils.middleware');
exports.validateUserLogging = [
  // Validate email
  body('email').isEmail().withMessage('Please provide a valid email address').normalizeEmail(),

  // Validate password
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  handleValidationErrors,
];
