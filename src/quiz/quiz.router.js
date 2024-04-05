const router = require('express').Router();

const quizController = require('./quiz.controller');
const deleteQuizValidator = require('./utils/validators/delete.validator');
const createQuizValidator = require('./utils/validators/create.validator');
const { isAuthMiddleware } = require('../utils/middlewares/auth/is-auth.middleware');
const { isOwnerMiddleware } = require('./utils/middlewares/is-owner.middleware');
const { wrapAsync } = require('../utils/middlewares/wrap-async.middleware');

router.use(isAuthMiddleware);

router.post('/', createQuizValidator, wrapAsync(quizController.create));
router.get('/:id', wrapAsync(quizController.findOne));
router.delete('/:id', isOwnerMiddleware, deleteQuizValidator, wrapAsync(quizController.remove));

module.exports = router;
