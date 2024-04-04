const Question = require("../../../question/model/question.model");

const calculateScoreForAnswer = async (answer) => {
  let score = 0;
  for (const questionAnswer of answer.questionAnswers) {
    const question = await Question.findById(questionAnswer.questionId);
    if (question.correctAnswer === questionAnswer.userAnswer) {
      score++;
    }
  }
  return score;
};

const calculateAverageGrade = (totalScore, answersLength) => {
  return totalScore / answersLength;
};

module.exports = { calculateScoreForAnswer, calculateAverageGrade };
