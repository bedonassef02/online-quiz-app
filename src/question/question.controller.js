const asyncHandler = require('express-async-handler');
const questionService = require('./question.service');

// TODO: when create check quiz password
const create = asyncHandler(async(req, res) => {
    const {text, options, correctAnswer, quizId} = req.body;
    const question = await questionService.create({text, options, correctAnswer, quizId});
    res.status(201).json(question);
})

// TODO: when delete check quiz password
const remove = asyncHandler(async(req, res) => { 
    const {id} = req.params;
    await questionService.remove(id);
    res.status(204);
})