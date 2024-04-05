const router = require('express').Router();
const userController = require('./user.controller');
const { validateUserLogging } = require('./utils/validators/login.validator');
const {
  validateUserRegistration,
} = require('./utils/validators/register.validator');

router.post('/register', validateUserRegistration, userController.register);
router.post('/login', validateUserLogging, userController.login);

module.exports = router;
