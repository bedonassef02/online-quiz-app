const { body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/middlewares/validation-utils.middleware");
const {
  checkIfQuizExists,
} = require("../../../answer/utils/helpers/validation-quiz-activation.helper");
const {
  checkIfQuizIsNotActive,
} = require("../helpers/check-if-quicz-is-not-active.helper");
const { checkIfGradeExists } = require("../helpers/check-if-grade-exists.helper");
const { checkQuizPassword } = require("../../../quiz/utils/helpers/check-quiz-password.helper");

const calculateGradenValidator = [
  
  body("quizId")
    .notEmpty()
    .withMessage("quizId is required")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID")
    .custom(checkIfQuizExists)
    .custom(checkIfQuizIsNotActive)
    .custom(checkIfGradeExists),

    body('password')
    .notEmpty().withMessage('password is required')
    .custom(checkQuizPassword),

  handleValidationErrors,
];

module.exports = calculateGradenValidator;
