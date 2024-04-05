const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuizGrade = mongoose.model('QuizGrade', gradeSchema);

module.exports = QuizGrade;
