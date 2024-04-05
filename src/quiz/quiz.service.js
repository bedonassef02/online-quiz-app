const Quiz = require('./model/quiz.model');
const { getQuizActiveStatusFromCache, calculateQuizActiveStatus, cacheQuizActiveStatus } = require('./utils/helpers/is-active-cache.helper');

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
    let isActive = await getQuizActiveStatusFromCache(id);

    if (isActive === null) {
        isActive = await calculateQuizActiveStatus(id);
        await cacheQuizActiveStatus(id, isActive);
    }

    return isActive;
}