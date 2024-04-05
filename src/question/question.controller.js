const asyncHandler = require('express-async-handler');
const questionService = require('./question.service');
const { extractQuestionData } = require('./utils/helpers/extracing/extract-data.helper');
const { HttpStatus } = require('../utils/constants/http-status');

exports.create = asyncHandler(async (req, res) => {
  const questionData = extractQuestionData(req);
  const question = await questionService.create(questionData);
  res.status(HttpStatus.CREATED).json(question);
});

exports.findAll = asyncHandler(async (req, res) => {
  const { quizId } = req.query;
  const questions = await questionService.findAll(quizId);
  res.status(HttpStatus.OK).json(questions);
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await questionService.remove(id);
  res.status(HttpStatus.OK).json({ message: 'Question deleted successfully' });
});
