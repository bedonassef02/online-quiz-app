const express = require('express');
const morgan = require('morgan');
const {
  NotFoundException,
} = require('./utils/middlewares/not-found.middleware');
const {
  HandleException,
} = require('./utils/middlewares/catch-errors.middleware');
const { seedDatabase } = require('./utils/db-seed');

const setupExpressApp = () => {
  const app = express();

  app.use(express.json());

  app.use(morgan('dev'));

  app.use('/quiz', require('./quiz/quiz.router'));
  app.use('/question', require('./question/question.router'));
  app.use('/answer', require('./answer/answer.router'));
  app.use('/grade', require('./grade/grade.router'));

  seedDatabase();

  app.use(NotFoundException);

  app.use(HandleException);

  return app;
};

module.exports = { setupExpressApp };
