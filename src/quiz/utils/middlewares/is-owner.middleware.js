const quizService = require('../../quiz.service');
const isOwnerMiddleware = async (req, res, next) => {
  const { id } = req.user;
  const quizId = req.params.id;

  const quiz = await quizService.findOne(quizId);
  if (!quiz) {
    res.status(404).json({ message: 'Quiz not found' });
  } else if (quiz.userId.toJSON() === id) {
    next();
  } else {
    res.status(401).json({ message: 'You are not the owner of this quiz' });
  }
};

module.exports = {
  isOwnerMiddleware,
};
