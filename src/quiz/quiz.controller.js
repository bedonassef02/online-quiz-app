const asyncHandler = require("express-async-handler");
const quizService = require("./quiz.service");
const { handleQuizResponse, handleDeleteQuizResponse } = require("./utils/helpers/handleQuizResponse");

exports.create = asyncHandler(async (req, res) => {
  const { name, description, startTime, duration, password } = req.body;
  const quiz = await quizService.create({
    name,
    description,
    startTime,
    duration,
    password,
  });
  res.status(201).json(quiz);
});

exports.findOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const quiz = await quizService.findOne(id);
  handleQuizResponse(req, res, quiz);
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const quiz = await quizService.remove(id);
  handleDeleteQuizResponse(req, res, quiz);
});
