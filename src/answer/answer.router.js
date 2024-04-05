const router = require('express').Router();
const answerController = require('./answer.controller');
const handleAnswerValidator = require('./utils/validators/create.validator');

router.post('/', handleAnswerValidator, answerController.create);

module.exports = router;
