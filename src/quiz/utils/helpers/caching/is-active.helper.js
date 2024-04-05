const { redis } = require('../../../../config/redis.config');
const calculateTime = require('../calculation/time.helper');
const Quiz = require('../../../model/quiz.model');

async function getQuizActiveStatusFromCache(id) {
  const cachedResult = await redis.get(`quiz:${id}:isActive`);
  return cachedResult ? JSON.parse(cachedResult) : null;
}

async function calculateQuizActiveStatus(id) {
  const quiz = await Quiz.findById(id);
  const { now, startTime, endTime } = calculateTime(quiz);
  return now >= startTime && now <= endTime;
}

async function cacheQuizActiveStatus(id, isActive) {
  await redis.set(`quiz:${id}:isActive`, JSON.stringify(isActive), 'EX', 60);
}

module.exports = {
  getQuizActiveStatusFromCache,
  calculateQuizActiveStatus,
  cacheQuizActiveStatus,
};
