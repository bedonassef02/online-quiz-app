const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 128,
        minLength: 3,
    },
    options: {
        type: [String],
        required: true,
        maxLength: 5,
        minLength: 2,
    },
    correctAnswer: {
        type: String,
        required: true,
        maxLength: 64,
        minLength: 1,
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
    }
}, {
    timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question; 
