const express = require('express');
const morgan = require('morgan');
const { NotFoundException } = require('./utils/not-found.middleware');
const { HandleException } = require('./utils/catch-errors.middleware');

const setupExpressApp = () => {
  const app = express();

  app.use(express.json());

  app.use(morgan('dev'));

  app.use('/quiz', require('./quiz/quiz.router'));
  app.use('/question', require('./question/question.router'));

  app.use(NotFoundException);

  app.use(HandleException);

  return app;
};

module.exports = { setupExpressApp };