const QuizGrade = require("../../../model/grade.model");

const saveHelper = async (quizId, averageGrade, userId) => {
  const quizGrade = new QuizGrade({
    quizId,
    grade: averageGrade,
    userId,
  });
  await quizGrade.save();
};

module.exports = { saveQuizGrade: saveHelper };
