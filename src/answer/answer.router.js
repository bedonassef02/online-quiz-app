const router = require('express').Router();
const answerController = require('./answer.controller');
const handleAnswerValidator = require('./utils/validators/handle-answer-creation');

router.post('/',handleAnswerValidator, answerController.create);

module.exports = router;