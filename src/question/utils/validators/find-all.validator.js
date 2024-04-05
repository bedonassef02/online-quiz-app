const { query } = require('express-validator');
const { handleValidationErrors } = require('../../../utils/middlewares/validation-utils.middleware');
const quizService = require('../../../quiz/quiz.service');

const findAllQuestionValidator = [
  query('quizId')
    .notEmpty()
    .withMessage('quizId is required')
    .isMongoId()
    .withMessage('quizId must be a valid Mongo ID')
    .custom(async (id) => {
      const quiz = await quizService.findOne(id);
      if (!quiz) {
        throw new Error('quiz not found');
      }
      return true;
    }),
  handleValidationErrors,
];

module.exports = findAllQuestionValidator;
