const asyncHandler = require('express-async-handler');
const quizService = require('./quiz.service');

exports.create = asyncHandler(async(req, res) => {
    const {name, description, startTime, duration, password} = req.body;
    const quiz = await quizService.create({name, description, startTime, duration, password});
    res.status(201).json(quiz);
})

exports.findOne = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const quiz = await quizService.findOne(id);
    if(!quiz){
        res.status(404).json({message: `No quiz found for id ${id}`});
    }else if (isQuizActive(quiz)) {
        res.status(200).json(quiz);
    } else {
        res.status(400).json({ message: "The quiz is not currently active." });
    }
})

const isQuizActive = (quiz) =>{
    const now = new Date();
    const startTime = new Date(quiz.startTime);
    const endTime = new Date(quiz.startTime.getTime() + quiz.duration * 60000); // Convert duration from minutes to milliseconds

    return now >= startTime && now <= endTime;
}