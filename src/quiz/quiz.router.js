const router = require('express').Router();

const quizController = require('./quiz.controller');
const deleteQuizValidator = require('./utils/validators/handle-quiz-deletion');
const createQuizValidator = require('./utils/validators/validate-quiz-creation');

router.post('/',createQuizValidator, quizController.create);
router.get('/:id', quizController.findOne);
router.delete('/:id', deleteQuizValidator, quizController.remove);

module.exports = router;