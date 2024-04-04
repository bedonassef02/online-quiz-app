const Question = require('./model/question.model')

exports.create = ({text, options, correctAnswer, quizId})=>{
    return Question.create({text, options, correctAnswer, quizId});
}

exports.findAll = (quizId)=>{
    return Question.find({quizId});
}

exports.findOne = (id)=>{
    return Question.findById(id);
}

exports.remove = async(id) =>{
     await Question.findByIdAndDelete(id)
}