const { query } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const {
  checkIfQuizExists,
} = require("../../../answer/utils/helpers/validationQuizActivation");
const {
  checkQuizQueryPassword,
} = require("../../../quiz/utils/helpers/checkQuizPassword");

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
