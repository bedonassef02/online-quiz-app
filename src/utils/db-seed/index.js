const { insertQuestionsForQuizzes } = require("../../question/utils/db-seed/insertQuestions");
const {
  insertQuizDataIntoDatabase,
} = require("../../quiz/utils/db-seed/insertQuizes");

const seedDatabase = async() => {
  const isSeedEnabled = process.env.ENABLE_SEED || false;

  if (isSeedEnabled == true) {
    const ids = await insertQuizDataIntoDatabase();
    insertQuestionsForQuizzes(ids)
  }
};

module.exports = { seedDatabase };
