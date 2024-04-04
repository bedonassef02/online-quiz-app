const { query, param, body } = require("express-validator");
const { handleValidationErrors } = require("../../../utils/validation-utils");
const { checkQuizPassword } = require("../helpers/checkQuizPassword");

const deleteQuestionValidator = [
 param("id")
    .isMongoId()
    .withMessage("quizId must be a valid Mongo ID"),

 body("password")
    .notEmpty().withMessage("quiz password is required")
    .custom(checkQuizPassword),

 handleValidationErrors,
];

module.exports = deleteQuestionValidator;