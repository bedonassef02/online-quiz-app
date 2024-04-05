const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

exports.sign = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

exports.verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

exports.generate = (user) => {
  const payload = { id: user.id, email: user.email };
  return this.sign(payload);
};
