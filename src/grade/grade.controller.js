const { HttpStatus } = require('../utils/constants/http-status');
const gradeService = require('./grade.service');
exports.calculateQuizGrades = async (req, res) => {
  const { quizId } = req.body;
  gradeService.calculateQuizGrades(quizId);
  res.status(HttpStatus.OK).json({ message: 'Quiz grades calculated successfully' });
};

exports.findAll = async (req, res) => {
  const { quizId } = req.query;
  const grades = await gradeService.findAll(quizId);
  res.status(HttpStatus.OK).json(grades);
};

exports.findOne = async (req, res) => {
  const { quizId } = req.params;
  const userId = req.user.id;
  const grade = await gradeService.findOne({ quizId, userId });
  if (grade) {
    res.status(HttpStatus.OK).json(grade);
  } else {
    res.status(HttpStatus.NOT_FOUND).json({ message: 'Grade not found' });
  }
};
