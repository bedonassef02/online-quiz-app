const answersService = require("../../../answer.service");

const hasUserAnsweredQuiz = async (userId, { req }) => {
  const { quizId } = req.body;
  const isExist = await answersService.existingAnswer({ userId, quizId });
  if (isExist) {
    throw new Error("User already answered this quiz");
  }
  return true;
};

module.exports = { hasUserAnsweredQuiz };
