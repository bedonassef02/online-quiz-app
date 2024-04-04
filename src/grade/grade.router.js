const router = require("express").Router();

const gradeController = require("./grade.controller");
const calculateGradeValidation = require("./utils/validators/calculate-grade.validation");

router.post("/", calculateGradeValidation, gradeController.calculateQuizGrades);

module.exports = router;
