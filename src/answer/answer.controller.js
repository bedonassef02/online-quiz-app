const answersService = require("./answer.service");

exports.create = async(req, res) => {
  // TODO: handle if userId is already submitted
  const { userId, questionAnswers, quizId } = req.body;
  const answer = await answersService.create({ userId, questionAnswers, quizId });
  res.status(201).json(answer);
};
