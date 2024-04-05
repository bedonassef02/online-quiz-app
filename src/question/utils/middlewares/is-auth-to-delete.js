const questionService = require('../../question.service');
const quizService = require('../../../quiz/quiz.service');

const isAuthToDelete = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const question = await questionService.findOne(id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const quiz = await quizService.findOne(question.quizId);

    if (!quiz || quiz.userId.toJSON() !== userId) {
      return res.status(401).json({ message: 'You are not the owner of this quiz' });
    }

    next();
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    // Send a generic error response
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
};

module.exports = {
  isAuthToDelete,
};
