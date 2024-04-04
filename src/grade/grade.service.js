const { saveQuizGrade } = require("./utils/helpers/saveQuizGrade");
const answersService = require("../answer/answer.service");
const {
  calculateScoreForAnswer, calculateAverageGrade,
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

  console.log(
    `Quiz Grade for Quiz ID ${quizId} has been calculated and saved.`
  );
};
