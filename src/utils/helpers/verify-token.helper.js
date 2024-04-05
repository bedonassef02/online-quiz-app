const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
