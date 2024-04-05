// Helper function to extract quiz data from request body
const extractQuizData = (req) => ({
  name: req.body.name,
  description: req.body.description,
  startTime: req.body.startTime,
  duration: req.body.duration,
  userId: req.user.id
});

module.exports = { extractQuizData };
