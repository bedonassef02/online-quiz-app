const { body } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');

const createQuizValidator = [
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 3, max: 64 })
    .withMessage('name length must be between 3 and 64 characters'),

  body('description')
    .notEmpty()
    .withMessage('description is required')
    .isLength({ min: 10, max: 255 })
    .withMessage('description length must be between 10 and 255 characters'),

  body('startTime')
    .notEmpty()
    .withMessage('startTime is required')
    .isISO8601()
    .withMessage('startTime must be a valid ISO 8601 date string'),

  body('duration')
    .notEmpty()
    .withMessage('duration is required')
    .isInt({ min: 1 })
    .withMessage('duration must be an integer greater than 0'),

  handleValidationErrors,
];

module.exports = createQuizValidator;
