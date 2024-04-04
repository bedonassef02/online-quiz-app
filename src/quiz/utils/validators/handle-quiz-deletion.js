const { param, body } = require('express-validator');
const { handleValidationErrors } = require('../../../utils/validation-utils');
const { checkQuizPassword } = require('../helpers/checkQuizPassword');

const deleteQuizValidator = [

    param('id')
        .isMongoId()
        .withMessage('id must be a valid Mongo ID'),

    body('password')
    .notEmpty().withMessage('password is required')
    .custom(checkQuizPassword),

    handleValidationErrors
];


module.exports = deleteQuizValidator;