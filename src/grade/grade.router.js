const router = require('express').Router();

const gradeController = require('./grade.controller');
const calculateGradeValidation = require('./utils/validators/calculate.validator');
const {
  findAllGradesValidator,
} = require('./utils/validators/find-all.validtor');
const {
  findOneGradeValidator,
} = require('./utils/validators/find-one.validator');
const {
  isAuthMiddleware,
} = require('../utils/middlewares/auth/is-auth.middleware');

router.use(isAuthMiddleware);

router.post('/', calculateGradeValidation, gradeController.calculateQuizGrades);
router.get('/', findAllGradesValidator, gradeController.findAll);
router.get('/:quizId', findOneGradeValidator, gradeController.findOne);

module.exports = router;
