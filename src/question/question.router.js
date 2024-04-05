const router = require('express').Router();

const questionController = require('./question.controller');
const createQuestionValidator = require('./utils/validators/create.validator');
const findAllQuestionValidator = require('./utils/validators/find-all.validator');
const deleteQuestionValidator = require('./utils/validators/delete.validator');

router.get('/', findAllQuestionValidator, questionController.findAll);
router.post('/', createQuestionValidator, questionController.create);
router.delete('/:id', deleteQuestionValidator, questionController.remove);

module.exports = router;
