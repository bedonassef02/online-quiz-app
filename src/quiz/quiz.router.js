const router = require('express').Router();

const quizController = require('./quiz.controller');
const createQuizValidator = require('./utils/validate-quiz-creation');

router.post('/',createQuizValidator, quizController.create);
router.get('/:id', quizController.findOne);

module.exports = router;