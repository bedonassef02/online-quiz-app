const { query } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/middlewares/validation-utils.middleware");
const {
  checkIfQuizExists,
} = require("../../../answer/utils/helpers/validation-quiz-activation.helper");
const {
  checkQuizQueryPassword,
} = require("../../../quiz/utils/helpers/check-quiz-password.helper");

const findAllGradesValidator = [
  query("quizId")
    .notEmpty()
    .withMessage("quizId is required")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID")
    .custom(checkIfQuizExists),

  query("password")
    .notEmpty()
    .withMessage("password is required")
    .custom(checkQuizQueryPassword),

  handleValidationErrors,
];

module.exports = { findAllGradesValidator };
