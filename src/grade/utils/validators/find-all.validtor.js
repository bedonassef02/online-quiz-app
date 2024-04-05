const { query } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');
const {
  checkIfQuizExists,
} = require('../../../answer/utils/helpers/checking/is-active.helper');
const {
  checkQuizQueryPassword,
} = require('../../../quiz/utils/helpers/checking/check-password.helper');

const findAllGradesValidator = [
  query('quizId')
    .notEmpty()
    .withMessage('quizId is required')
    .isMongoId()
    .withMessage('quizId must be a valid Mongo ID')
    .custom(checkIfQuizExists),

  query('password')
    .notEmpty()
    .withMessage('password is required')
    .custom(checkQuizQueryPassword),

  handleValidationErrors,
];

module.exports = { findAllGradesValidator };
