const quizService = require('../../../quiz/quiz.service');
const isQuestionOwner = async (req, res, next) => {
  const { id } = req.user;
  const {quizId} = req.body;

  const quiz = await quizService.findOne(quizId);
  console.log({quiz, id})
  if (quiz.userId.toJSON() === id) {
    next();
  } else {
    res.status(401).json({ message: 'You are not the owner of this quiz' });
  }
};

module.exports = {
    isQuestionOwner,
};
