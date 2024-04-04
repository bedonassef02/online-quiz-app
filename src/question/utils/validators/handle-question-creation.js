const { body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const quizService = require("../../../quiz/quiz.service");

const createQuestionValidator = [
  body("text")
    .notEmpty()
    .withMessage("text is required")
    .isLength({ min: 3, max: 128 })
    .withMessage("text length must be between 3 and 128 characters"),

  body("options")
    .notEmpty()
    .withMessage("options are required")
    .isArray({ min: 2, max: 5 })
    .withMessage("options must be an array with 2 to 5 elements")
    .custom((options) => {
      if (options.some((option) => typeof option !== "string")) {
        throw new Error("All options must be strings");
      }
      return true;
    })
    .withMessage("All options must be strings"),

  body("correctAnswer")
    .notEmpty()
    .withMessage("correctAnswer is required")
    .isLength({ min: 1, max: 64 })
    .withMessage("correctAnswer length must be between 1 and 64 characters"),

  body("quizId")
    .notEmpty()
    .withMessage("quizId is required")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID")
    .custom(async (id) => {
      const quiz = await quizService.findOne(id);
      if(!quiz){
        throw new Error("quiz not found");
      }
      return true;
    }),
  handleValidationErrors,
];

module.exports = createQuestionValidator;
