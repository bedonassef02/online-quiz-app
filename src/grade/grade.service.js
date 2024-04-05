const { saveQuizGrade } = require("./utils/helpers/saveQuizGrade");
const QuizGrade = require("./model/grade.model");
const answersService = require("../answer/answer.service");
const {
  calculateScoreForAnswer,
  calculateAverageGrade,
} = require("./utils/helpers/calculateScoreForAnswer");
exports.calculateQuizGrades = async (quizId) => {
  const answers = await answersService.findAll(quizId);
  let totalScore = 0;
  for (const answer of answers) {
    const score = await calculateScoreForAnswer(answer);
    totalScore += score;
  }

  const averageGrade = calculateAverageGrade(totalScore, answers.length);
  await saveQuizGrade(quizId, averageGrade);
};

exports.findAll = async (quizId) => {
  return await QuizGrade.find({ quizId }).select("userId grade");
};

exports.findOne = async ({ quizId, userId }) => {
  return await QuizGrade.findOne({ quizId, userId });
};
