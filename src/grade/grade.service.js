const { saveQuizGrade } = require("./utils/helpers/saveQuizGrade");
const QuizGrade = require("./model/grade.model");
const answersService = require("../answer/answer.service");
const {
  calculateScoreForAnswer,
  calculateAverageGrade,
  groupAnswersByUserId,
} = require("./utils/helpers/calculateScoreForAnswer");

exports.calculateQuizGrades = async (quizId) => {
  const answers = await answersService.findAll(quizId);
  const groupedAnswers = groupAnswersByUserId(answers);
 
  for (const userId in groupedAnswers) {
     const userAnswers = groupedAnswers[userId];
     let totalScore = 0;
     for (const answer of userAnswers) {
       const score = await calculateScoreForAnswer(answer);
       totalScore += score;
     }
     const averageGrade = calculateAverageGrade(totalScore, userAnswers.length);
     await saveQuizGrade(quizId, averageGrade, userId);
  }
 };
 
exports.findAll = async (quizId) => {
  return await QuizGrade.find({ quizId }).select("userId grade");
};

exports.findOne = async ({ quizId, userId }) => {
  return await QuizGrade.findOne({ quizId, userId });
};
