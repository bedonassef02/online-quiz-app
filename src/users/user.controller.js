const { HttpStatus } = require('../utils/constants/http-status');
const userService = require('./user.service');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.register(email, password);
  res.status(HttpStatus.CREATED).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  if (user) {
    res.status(HttpStatus.OK).json(user);
  } else {
    res.status(HttpStatus.UNAUTHORIZED).json({ status: 'error', message: 'Invalid credentials' });
  }
};
