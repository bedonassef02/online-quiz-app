const { insertQuestionsForQuizzes } = require('../../question/utils/db-seed/insert-questions');
const { insertQuizDataIntoDatabase } = require('../../quiz/utils/db-seed/insert-quizes');

const seedDatabase = async () => {
  const isSeedEnabled = process.env.ENABLE_SEED === 'true';

  console.log(`Seeding is ${isSeedEnabled ? 'enabled' : 'disabled'}.`);

  if (isSeedEnabled) {
    const ids = await insertQuizDataIntoDatabase();
    await insertQuestionsForQuizzes(ids);
  }
};

module.exports = { seedDatabase };
