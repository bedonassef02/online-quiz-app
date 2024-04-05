const quizService = require('../../../quiz/quiz.service');

const checkIfQuizIsNotActive = async (quizId) => {
    const isActive = await quizService.isActive(quizId);
    if (isActive) {
      throw new Error("Can't Calculate Grade While Quiz is active");
    }
    return true;
  };

  
  module.exports = {checkIfQuizIsNotActive}