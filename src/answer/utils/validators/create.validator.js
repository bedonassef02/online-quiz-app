const { body } = require('express-validator');
const {
  handleValidationErrors,
} = require('../../../utils/middlewares/validation-utils.middleware');
const {
  validateQuestionAnswerStructure,
} = require('../helpers/checking/is-structured.helper');
const {
  validateQuestionRelationToQuiz,
} = require('../helpers/checking/is-related.helper');
const {
  checkIfQuizIsActive,
  checkIfQuizExists,
} = require('../helpers/checking/is-active.helper');
const {
  hasUserAnsweredQuiz,
} = require('../helpers/checking/has-answered.hlper');

const handleAnswerValidator = [

  body('quizId')
    .notEmpty()
    .withMessage('quizId is required')
    .isMongoId()
    .withMessage('quizId must be a valid Mongo ID')
    .custom(checkIfQuizExists)
    .custom(checkIfQuizIsActive),

  body('questionAnswers')
    .notEmpty()
    .withMessage('questionAnswers is required')
    .isArray({ min: 1 })
    .withMessage('questionAnswers must be an array with at least one element')
    .custom(validateQuestionAnswerStructure)
    .custom(validateQuestionRelationToQuiz),

  handleValidationErrors,
];

module.exports = handleAnswerValidator;
