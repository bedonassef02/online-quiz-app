const router = require("express").Router();

const gradeController = require("./grade.controller");

// TODO: validate quizId 
router.post("/", gradeController.calculateQuizGrades);

module.exports = router;
