const QuizGrade = require("../../model/grade.model");

const saveQuizGrade = async (quizId, averageGrade, userId) => {
  const quizGrade = new QuizGrade({
    quizId,
    grade: averageGrade,
    userId,
  });
  await quizGrade.save();
};

module.exports = { saveQuizGrade };
