const router = require("express").Router();

const gradeController = require("./grade.controller");
const calculateGradeValidation = require("./utils/validators/calculate-grade.validation");
const {
  findAllGradesValidator,
} = require("./utils/validators/find-all-grades.validtor");

router.post("/", calculateGradeValidation, gradeController.calculateQuizGrades);
router.get("/", findAllGradesValidator, gradeController.findAll);

module.exports = router;
