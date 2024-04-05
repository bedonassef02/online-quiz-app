const answersService = require('./answer.service');
exports.create = async (req, res) => {
  const { questionAnswers, quizId } = req.body;
  const userId = req.user.id;
  const answer = await answersService.create({
    userId,
    questionAnswers,
    quizId,
  });
  res.status(201).json(answer);
};
