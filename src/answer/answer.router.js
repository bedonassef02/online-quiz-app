const router = require('express').Router();
const answerController = require('./answer.controller');
const handleAnswerValidator = require('./utils/validators/create.validator');
const {
  isAuthMiddleware,
} = require('../utils/middlewares/auth/is-auth.middleware');

router.use(isAuthMiddleware);

router.post('/', handleAnswerValidator, answerController.create);

module.exports = router;
