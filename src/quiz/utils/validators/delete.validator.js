const { param, body } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');
const {
  checkQuizPassword,
} = require('../helpers/checking/check-password.helper');

const deleteQuizValidator = [
  param('id').isMongoId().withMessage('id must be a valid Mongo ID'),

  body('password')
    .notEmpty()
    .withMessage('password is required')
    .custom(checkQuizPassword),

  handleValidationErrors,
];

module.exports = deleteQuizValidator;
