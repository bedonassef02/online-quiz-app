const asyncHandler = require('express-async-handler');
const questionService = require('./question.service');
const { extractQuestionData } = require('./utils/helpers/extractQuestionData');

exports.create = asyncHandler(async (req, res) => {
    const questionData = extractQuestionData(req);
    const question = await questionService.create(questionData);
    res.status(201).json(question);
});

exports.findAll = asyncHandler(async (req, res) => {
    const { quizId } = req.query;
    const questions = await questionService.findAll(quizId);
    res.status(200).json(questions);
});

exports.remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await questionService.remove(id);
    res.status(200).json({ message: 'Question deleted successfully' });
});