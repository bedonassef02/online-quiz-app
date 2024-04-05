const questionService = require("../../question.service");
const quizService = require("../../../quiz/quiz.service");

const checkQuizPasswordHelper = async (password, { req }) => {
  const { id } = req.params;
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
};

module.exports = {checkQuizPassword: checkQuizPasswordHelper};