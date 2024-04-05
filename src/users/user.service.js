const User = require('./models/user.model');
const jwtService = require('./services/jwt.service');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

exports.register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await User.create({ email, password: hashedPassword });
  return jwtService.generate(user);
};

exports.findByEmail = async (email) => {
  return User.findOne({ email });
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return jwtService.generate(user);
  }
  return null;
};
