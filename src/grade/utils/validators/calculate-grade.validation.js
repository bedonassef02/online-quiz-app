const { body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const {
  checkIfQuizExists,
} = require("../../../answer/utils/helpers/validationQuizActivation");
const {
  checkIfQuizIsNotActive,
} = require("../helpers/checkIfQuiczIsNotActive");
const { checkIfGradeExists } = require("../helpers/checkIfGradeExists");

const calculateGradenValidator = [
  
  body("quizId")
    .notEmpty()
    .withMessage("quizId is required")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID")
    .custom(checkIfQuizExists)
    .custom(checkIfQuizIsNotActive)
    .custom(checkIfGradeExists),

  handleValidationErrors,
];

module.exports = calculateGradenValidator;
