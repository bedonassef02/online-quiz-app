const timeHelper = (quiz)=>{
    const now = new Date();
    const startTime = new Date(quiz.startTime);
    const endTime = new Date(startTime.getTime() + quiz.duration * 60000); // Convert duration from minutes to milliseconds
    return {now, startTime, endTime};
}

module.exports = timeHelper;