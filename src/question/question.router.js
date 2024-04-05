const router = require('express').Router();

const questionController = require('./question.controller');
const createQuestionValidator = require('./utils/validators/create.validator');
const findAllQuestionValidator = require('./utils/validators/find-all.validator');
const deleteQuestionValidator = require('./utils/validators/delete.validator');
const { isAuthMiddleware } = require('../utils/middlewares/auth/is-auth.middleware');
const { isQuestionOwner } = require('./utils/middlewares/is-quiz-owner');
const { isAuthToDelete } = require('./utils/middlewares/is-auth-to-delete');
const { wrapAsync } = require('../utils/middlewares/wrap-async.middleware');

router.use(isAuthMiddleware);

router.get('/', findAllQuestionValidator, wrapAsync(questionController.findAll));
router.post('/', createQuestionValidator, isQuestionOwner, wrapAsync(questionController.create));
router.delete('/:id', deleteQuestionValidator, isAuthToDelete, wrapAsync(questionController.remove));

module.exports = router;
