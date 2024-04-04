const QuizGrade = require("../../model/grade.model");

const checkIfGradeExists = async (quizId) => {
  const existingGrade = await QuizGrade.findOne({ quizId });
  if (existingGrade) {
    throw new Error(
      `Grade for Quiz ID ${quizId} has already been calculated.`
    );
  }
  return true;
}
module.exports = { checkIfGradeExists };
