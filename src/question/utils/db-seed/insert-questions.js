const fs = require("fs");
const questionService = require("../../../question/question.service");

const insertQuestionsForQuizzes = async (quizIds) => {
 try {
    // Define the path to the JSON file containing question data
    const questionDataFilePath = "./src/question/utils/db-seed/questions.json";
    // Read the content of the JSON file
    const fileContent = fs.readFileSync(questionDataFilePath, "utf8");

    // Parse the JSON content into an array of question objects
    const questionEntries = JSON.parse(fileContent);

    // Loop through each quiz ID
    for (const quizId of quizIds) {
      // Select 3 questions for the current quiz ID
      const questionsForQuiz = questionEntries.slice(0, 3); // Assuming you want to insert the first 3 questions for each quiz

      // Insert each question into the database, associating it with the current quiz ID
      for (const question of questionsForQuiz) {
        await questionService.create({ ...question, quizId }); // Assuming this method exists in your service and accepts a quizId parameter
      }
    }

    console.log("Question data inserted successfully");
 } catch (error) {
    console.error("Error inserting question data:", error.message);
 }
};

module.exports = { insertQuestionsForQuizzes };
