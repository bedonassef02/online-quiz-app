const quizService = require("../../../quiz/quiz.service");

const checkIfQuizIsActive = async (quizId) => {
  const isActive = await quizService.isActive(quizId);
  if (!isActive) {
    throw new Error("Quiz is not active");
  }
  return true;
};

const checkIfQuizExists = async (quizId) => {
  const quiz = await quizService.findOne(quizId);
  if (!quiz) {
    throw new Error("Quiz not found");
  }
  return true;
};

module.exports = { checkIfQuizIsActive, checkIfQuizExists };
