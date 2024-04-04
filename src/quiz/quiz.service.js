const Quiz = require('./model/quiz.model')

exports.create = async ({name, description, startTime, duration, password})=>{
    return await Quiz.create({name, description, startTime, duration, password});
}

exports.findOne = (id) => {
    return Quiz.findById(id);
}

exports.remove = async(id) => {
    return await Quiz.findByIdAndDelete(id);
}