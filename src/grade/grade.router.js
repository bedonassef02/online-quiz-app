const router = require("express").Router();

const gradeController = require("./grade.controller");
const calculateGradeValidation = require("./utils/validators/calculate-grade.validation");
const {
  findAllGradesValidator,
} = require("./utils/validators/find-all-grades.validtor");
const {
  findOneGradeValidator,
} = require("./utils/validators/find-one-grade.validator");

router.post("/", calculateGradeValidation, gradeController.calculateQuizGrades);
router.get("/", findAllGradesValidator, gradeController.findAll);
router.get("/:quizId", findOneGradeValidator, gradeController.findOne);

module.exports = router;
