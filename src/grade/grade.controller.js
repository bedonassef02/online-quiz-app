const gradeService = require("./grade.service");
exports.calculateQuizGrades = async (req, res) => {
  const { quizId } = req.body;
  gradeService.calculateQuizGrades(quizId);
  res.status(200).json({ message: "Quiz grades calculated successfully" });
};

exports.findAll = async (req, res) => {
  const { quizId } = req.query;
  const grades = await gradeService.findAll(quizId);
  res.status(200).json(grades);
};

exports.findOne = async (req, res) => {
  const { quizId } = req.params;
  const { userId } = req.query;
  const grade = await gradeService.findOne({ quizId, userId });
  console.log(grade);
  if (grade) {
    res.status(200).json(grade);
  } else {
    res.status(404).json({ message: "Grade not found" });
  }
};
