const quizService = require('./quiz.service');
const { handleQuizResponse, handleDeleteQuizResponse } = require('./utils/helpers/handle-response/response.helper');
const { extractQuizData } = require('./utils/helpers/extracing/extract-data.helper');

exports.create = async (req, res) => {
  const quizData = extractQuizData(req);
  const quiz = await quizService.create(quizData);
  res.status(201).json(quiz);
};

exports.findOne = async (req, res) => {
  const { id } = req.params;
  const quiz = await quizService.findOne(id);
  handleQuizResponse(req, res, quiz);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const quiz = await quizService.remove(id);
  handleDeleteQuizResponse(req, res, quiz);
};
