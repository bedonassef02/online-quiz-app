const userService = require('./user.service');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.register(email, password);
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid credentials' });
  }
};
