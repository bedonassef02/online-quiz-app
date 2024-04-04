const { saveQuizGrade } = require("./utils/helpers/saveQuizGrade");
const answersService = require("../answer/answer.service");
const {
  calculateScoreForAnswer, calculateAverageGrade,
} = require("./utils/helpers/calculateScoreForAnswer");
const { checkIfGradeExists } = require("./utils/helpers/checkIfGradeExists");

exports.calculateQuizGrades = async (quizId) => {
  const existingGrade = await checkIfGradeExists(quizId);
  if (existingGrade) {
    console.log(`Grade for Quiz ID ${quizId} has already been calculated.`);
    return false;
  }

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
