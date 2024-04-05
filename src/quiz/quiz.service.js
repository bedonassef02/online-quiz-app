const Quiz = require('./model/quiz.model');
const {
  getQuizActiveStatusFromCache,
  calculateQuizActiveStatus,
  cacheQuizActiveStatus,
} = require('./utils/helpers/caching/is-active.helper');

exports.create = async (quiz) => {
  return await Quiz.create({ ...quiz });
};

exports.findOne = (id) => {
  return Quiz.findById(id);
};

exports.remove = async (id) => {
  return await Quiz.findByIdAndDelete(id);
};

exports.isActive = async (id) => {
  let isActive = await getQuizActiveStatusFromCache(id);

  if (isActive === null) {
    isActive = await calculateQuizActiveStatus(id);
    await cacheQuizActiveStatus(id, isActive);
  }

  return isActive;
};
