// Function to validate the structure of each questionAnswer
const validateQuestionAnswerStructureHelper = (value) => {
    for (const answer of value) {
        if (!answer.questionId || !answer.userAnswer) {
            throw new Error('Each questionAnswer must contain a questionId and userAnswer');
        }
    }
    return true;
};

module.exports = {validateQuestionAnswerStructure: validateQuestionAnswerStructureHelper}