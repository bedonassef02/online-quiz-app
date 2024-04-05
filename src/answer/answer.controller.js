const answersService = require('./answer.service');
exports.create = async (req, res) => {
  const { userId, questionAnswers, quizId } = req.body;
  const answer = await answersService.create({
    userId,
    questionAnswers,
    quizId,
  });
  res.status(201).json(answer);
};
