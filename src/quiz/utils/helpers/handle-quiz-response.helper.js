const { calculateTimeDifference } = require("./calculate-time-difference.helper");

function handleQuizResponseHelper(req, res, quiz) {
  if (!quiz) {
    res.status(404).json({ message: `No quiz found for id ${req.params.id}` });
  } else {
    const now = new Date();
    const startTime = new Date(quiz.startTime);
    const endTime = new Date(quiz.startTime.getTime() + quiz.duration * 60000); // Convert duration from minutes to milliseconds

    if (now < startTime) {
      // Quiz will start after some time
      const timeDifference = startTime - now;
      res
        .status(200)
        .json({
          message: `The quiz will start in ${calculateTimeDifference(
            timeDifference
          )}.`,
        });
    } else if (now > endTime) {
      // Quiz has finished
      const timeDifference = now - endTime;
      res
        .status(200)
        .json({
          message: `The quiz finished ${calculateTimeDifference(
            timeDifference
          )} ago.`,
        });
    } else {
      // Quiz is active now
      const timeDifference = endTime - now;
      const minutesDifference = Math.ceil(timeDifference / (1000 * 60));
      res
        .status(200)
        .json({
          message: `The quiz is active now. Duration: ${minutesDifference} minutes remaining.`,
        });
    }
  }
}

function handleDeleteQuizResponse(req, res, quiz) {
  if (!quiz) {
    res.status(404).json({ message: `No quiz found for id ${req.params.id}` });
  } else {
    res.status(204).json({ message: "Quiz has been removed" });
  }
}

module.exports = { handleQuizResponse: handleQuizResponseHelper, handleDeleteQuizResponse };
