const asyncHandler = require('express-async-handler');

// Middleware to wrap route handlers with asyncHandler
const wrapAsync = (handler) => {
  return asyncHandler(handler);
};
module.exports = { wrapAsync };
