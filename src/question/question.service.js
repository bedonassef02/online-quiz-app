const Question = require('./model/question.model')

exports.create = ({text, options, correctAnswer, quizId})=>{
    return Question.create({text, options, correctAnswer, quizId});
}

exports.remove = async(id) =>{
     await Question.findByIdAndDelete(id)
}