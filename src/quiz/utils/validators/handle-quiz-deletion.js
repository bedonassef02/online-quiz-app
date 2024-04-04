const { param, body } = require('express-validator');
const { handleValidationErrors } = require('../../../utils/validation-utils');
const quizService = require('../../quiz.service')

const deleteQuizValidator = [

    param('id')
        .isMongoId()
        .withMessage('id must be a valid Mongo ID'),

    body('password')
    .notEmpty().withMessage('password is required')
    .custom(async (password, {req, res})=>{
        const {id} = req.params;
        const quiz = await quizService.findOne(id);
        if(quiz && quiz.password!== password){
            throw new Error('Password is incorrect');
        }
        return true;
    })
    ,
    handleValidationErrors
];


module.exports = deleteQuizValidator;