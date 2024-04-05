const router = require('express').Router();

const quizController = require('./quiz.controller');
const deleteQuizValidator = require('./utils/validators/delete.validator');
const createQuizValidator = require('./utils/validators/create.validator');

router.post('/', createQuizValidator, quizController.create);
router.get('/:id', quizController.findOne);
router.delete('/:id', deleteQuizValidator, quizController.remove);

module.exports = router;
