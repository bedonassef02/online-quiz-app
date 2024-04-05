const router = require('express').Router();

const gradeController = require('./grade.controller');
const calculateGradeValidation = require('./utils/validators/calculate.validator');
const { findAllGradesValidator } = require('./utils/validators/find-all.validtor');
const { findOneGradeValidator } = require('./utils/validators/find-one.validator');
const { isAuthMiddleware } = require('../utils/middlewares/auth/is-auth.middleware');
const { wrapAsync } = require('../utils/middlewares/wrap-async.middleware');

router.use(isAuthMiddleware);

router.post('/', calculateGradeValidation, wrapAsync(gradeController.calculateQuizGrades));
router.get('/', findAllGradesValidator, wrapAsync(gradeController.findAll));
router.get('/:quizId', findOneGradeValidator, wrapAsync(gradeController.findOne));

module.exports = router;
