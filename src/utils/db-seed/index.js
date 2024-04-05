const {
  insertQuestionsForQuizzes,
} = require("../../question/utils/db-seed/insertQuestions");
const {
  insertQuizDataIntoDatabase,
} = require("../../quiz/utils/db-seed/insertQuizes");

const seedDatabase = async () => {
  const isSeedEnabled = process.env.ENABLE_SEED == "true" ? true : false;

  console.log(`Seeding is ${isSeedEnabled ? 'enabled' : 'disabled'}.`);

  if (isSeedEnabled) {
    const ids = await insertQuizDataIntoDatabase();
    insertQuestionsForQuizzes(ids);
  }
};

module.exports = { seedDatabase };
