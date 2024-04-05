const fs = require('fs');
const quizService = require('../../quiz.service');

const insertQuizDataIntoDatabase = async () => {
 try {
    // Read the JSON file containing quiz data
    const quizDataFilePath = './src/quiz/utils/db-seed/quizzes.json';
    const fileContent = fs.readFileSync(quizDataFilePath, 'utf8');

    const quizEntries = JSON.parse(fileContent);
    const ids = [];

    // Insert each quiz entry into the database
    for (const quizEntry of quizEntries) {
      const quiz = await quizService.create(quizEntry);
      ids.push(quiz.id);
    }

    console.log('Quiz data inserted successfully');
    return ids;
 } catch (error) {
    console.error('Error inserting quiz data:', error.message);
 }
};

module.exports = { insertQuizDataIntoDatabase };