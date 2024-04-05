const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        questionAnswers: [
            {
                questionId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Question',
                    required: true,
                },
                userAnswer: {
                    type: String,
                    required: true,
                },
            },
        ],
        quizId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
