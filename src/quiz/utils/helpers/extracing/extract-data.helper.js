// Helper function to extract quiz data from request body
const extractDataHelper = (req) => ({
  name: req.body.name,
  description: req.body.description,
  startTime: req.body.startTime,
  duration: req.body.duration,
  password: req.body.password,
});

module.exports = { extractQuizData: extractDataHelper };
