const Answer = require("./models/answer.model");
exports.create = async ({ userId, questionAnswers, quizId }) => {
  return await Answer.create({ userId, questionAnswers, quizId });
};

exports.existingAnswer = async ({userId, quizId}) => {
  return (await Answer.findOne({ userId, quizId }));
};