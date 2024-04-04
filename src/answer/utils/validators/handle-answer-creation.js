const { body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const quizService = require("../../../quiz/quiz.service");
const { validateQuestionAnswerStructure } = require("../helpers/validateQuestionAnswerStructure");
const { validateQuestionRelationToQuiz } = require("../helpers/validateQuestionRelationToQuiz");

const handleAnswerValidator = [
    body("userId")
        .notEmpty()
        .withMessage("userId is required")
        .isNumeric()
        .withMessage("userId must be a number"),

    body("quizId")
        .notEmpty()
        .withMessage("quizId is required")
        .isMongoId()
        .withMessage("quizId must be a valid Mongo ID")
        .custom(async (quizId) => {
            const quiz = await quizService.findOne(quizId);
            if (!quiz) {
                throw new Error("Quiz not found");
            }
            return true;
        }),

    body('questionAnswers')
        .notEmpty().withMessage('questionAnswers is required')
        .isArray({ min: 1 }).withMessage('questionAnswers must be an array with at least one element')
        .custom(validateQuestionAnswerStructure)
        .custom(validateQuestionRelationToQuiz),

    handleValidationErrors,
];

module.exports = handleAnswerValidator;