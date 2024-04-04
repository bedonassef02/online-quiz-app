const { body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const {
  validateQuestionAnswerStructure,
} = require("../helpers/validateQuestionAnswerStructure");
const {
  validateQuestionRelationToQuiz,
} = require("../helpers/validateQuestionRelationToQuiz");
const {
  checkIfQuizIsActive,
  checkIfQuizExists,
} = require("../helpers/validationQuizActivation");
const { hasUserAnsweredQuiz } = require("../helpers/is-user-answered-quiz");

const handleAnswerValidator = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isNumeric()
    .withMessage("userId must be a number")
    .custom(hasUserAnsweredQuiz),

  body("quizId")
    .notEmpty()
    .withMessage("quizId is required")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID")
    .custom(checkIfQuizExists)
    .custom(checkIfQuizIsActive),

  body("questionAnswers")
    .notEmpty()
    .withMessage("questionAnswers is required")
    .isArray({ min: 1 })
    .withMessage("questionAnswers must be an array with at least one element")
    .custom(validateQuestionAnswerStructure)
    .custom(validateQuestionRelationToQuiz),

  handleValidationErrors,
];

module.exports = handleAnswerValidator;
