const questionService = require("../../../question/question.service");

// Function to validate that the questionId is related to the quizId
const validateQuestionRelationToQuizHelper = async (value, {req}) => {
    const {quizId} = req.body;
    for (const answer of value) {
        const question = await questionService.findOne(answer.questionId);
        if (!question) {
            throw new Error(`Question with ID ${answer.questionId} not found`);
        }
        if (question.quizId.toString() !== quizId) {
            throw new Error(`Question with ID ${answer.questionId} not related to the quiz`);
        }
    }
    return true;
};

module.exports = {validateQuestionRelationToQuiz: validateQuestionRelationToQuizHelper}