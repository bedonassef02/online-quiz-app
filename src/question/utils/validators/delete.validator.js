const { param, body } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');

const deleteQuestionValidator = [
  param('id').isMongoId().withMessage('quizId must be a valid Mongo ID'),
  handleValidationErrors,
];

module.exports = deleteQuestionValidator;
