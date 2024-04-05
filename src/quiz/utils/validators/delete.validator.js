const { param, body } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');

const deleteQuizValidator = [
  param('id').isMongoId().withMessage('id must be a valid Mongo ID'),

  handleValidationErrors,
];

module.exports = deleteQuizValidator;
