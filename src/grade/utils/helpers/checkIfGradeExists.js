const QuizGrade = require("../../model/grade.model");

const checkIfGradeExists = async (quizId) => {
  return await QuizGrade.findOne({ quizId: quizId });
};

module.exports = { checkIfGradeExists };
