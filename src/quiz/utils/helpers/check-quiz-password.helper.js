const quizService = require("../../quiz.service");

const checkQuizPasswordHelper = async (password, { req }) => {
  const { id } = req.params;
  return handlePasswordCheck(id, password);
};

const checkQuizQueryPassword = async (password, { req }) => {
  const { quizId } = req.query;
  return handlePasswordCheck(quizId, password);
};

const handlePasswordCheck = async (id, password) => {
  const quiz = await quizService.findOne(id);
  if (quiz && quiz.password !== password) {
    throw new Error("Password is incorrect");
  }
  return true;
};

module.exports = { checkQuizPassword: checkQuizPasswordHelper, checkQuizQueryPassword };
