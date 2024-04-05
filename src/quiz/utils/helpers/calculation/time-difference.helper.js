function timeDifferenceHelper(timeDifference) {
  const secondsDifference = Math.ceil(timeDifference / 1000);
  const days = Math.floor(secondsDifference / (60 * 60 * 24));
  const hours = Math.floor((secondsDifference % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((secondsDifference % (60 * 60)) / 60);
  const seconds = secondsDifference % 60;

  let message = '';
  if (days > 0) message += `${days} days, `;
  if (hours > 0) message += `${hours} hours, `;
  if (minutes > 0) message += `${minutes} minutes, `;
  if (seconds > 0) message += `${seconds} seconds.`;

  return message.trim().slice(0, -1);
}

module.exports = { calculateTimeDifference: timeDifferenceHelper };
