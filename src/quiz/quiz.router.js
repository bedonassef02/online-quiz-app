const router = require('express').Router();

const quizController = require('./quiz.controller');
const deleteQuizValidator = require('./utils/validators/delete.validator');
const createQuizValidator = require('./utils/validators/create.validator');
const {
  isAuthMiddleware,
} = require('../utils/middlewares/auth/is-auth.middleware');
const {
  isOwnerMiddleware,
} = require('./utils/middlewares/is-owner.middleware');

router.use(isAuthMiddleware);

router.post('/', createQuizValidator, quizController.create);
router.get('/:id', quizController.findOne);
router.delete(
  '/:id',
  isOwnerMiddleware,
  deleteQuizValidator,
  quizController.remove
);

module.exports = router;
