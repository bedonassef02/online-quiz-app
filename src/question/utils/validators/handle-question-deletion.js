const { query, param, body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const questionService = require("../../question.service");
const quizService = require("../../../quiz/quiz.service");

const deleteQuestionValidator = [
 param("id")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID"),

 body("password")
    .notEmpty().withMessage("quiz password is required")
    .custom(async (password, {req}) => {
      const {id} = req.params;
      const question = await questionService.findOne(id);
      if (!question) {
        throw new Error("Question not found");
      }
      const quiz = await quizService.findOne(question.quizId);
      if (!quiz) {
        throw new Error("Quiz not found");
      }
      if (quiz.password !== password) {
        throw new Error("Password is incorrect");
      }
      return true;
    }),

 handleValidationErrors,
];

module.exports = deleteQuestionValidator;