const Quiz = require('./model/quiz.model');
const calculateTime = require('./utils/helpers/calculateTime');

exports.create = async ({name, description, startTime, duration, password})=>{
    return await Quiz.create({name, description, startTime, duration, password});
}

exports.findOne = (id) => {
    return Quiz.findById(id);
}

exports.remove = async(id) => {
    return await Quiz.findByIdAndDelete(id);
}

exports.isActive = async(id) => {
    const quiz = await this.findOne(id);
    
    const {now, startTime, endTime} = calculateTime(quiz);

    return now >= startTime && now <= endTime;
}