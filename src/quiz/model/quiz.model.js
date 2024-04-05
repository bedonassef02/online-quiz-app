const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 64,
      minLength: 3,
    },
    description: {
      type: String,
      maxLength: 255,
      minLength: 10,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      min: 1,
      required: true,
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
