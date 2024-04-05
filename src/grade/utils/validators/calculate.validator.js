const { body } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');
const {
  checkIfQuizExists,
} = require('../../../answer/utils/helpers/checking/is-active.helper');
const {
  checkIfQuizIsNotActive,
} = require('../helpers/checking/is-not-active.helper');
const { checkIfGradeExists } = require('../helpers/checking/is-exists.helper');
const {
  checkQuizPassword,
} = require('../../../quiz/utils/helpers/checking/check-password.helper');

const calculateGradenValidator = [
  body('quizId')
    .notEmpty()
    .withMessage('quizId is required')
    .isMongoId()
    .withMessage('quizId must be a valid Mongo ID')
    .custom(checkIfQuizExists)
    .custom(checkIfQuizIsNotActive)
    .custom(checkIfGradeExists),

  body('password')
    .notEmpty()
    .withMessage('password is required')
    .custom(checkQuizPassword),

  handleValidationErrors,
];

module.exports = calculateGradenValidator;
