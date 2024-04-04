const QuizGrade = require("../../model/grade.model");

const saveQuizGrade = async (quizId, averageGrade) => {
    const quizGrade = new QuizGrade({
      quizId: quizId,
      grade: averageGrade,
    });
    await quizGrade.save();
  };

  module.exports = {saveQuizGrade}