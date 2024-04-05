const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const { validateUserLogging } = require('./utils/validators/login.validator');
const { validateUserRegistration } = require('./utils/validators/register.validator');
const { wrapAsync } = require('../utils/middlewares/wrap-async.middleware');

// Apply asyncHandler to all route handlers
router.post('/register', validateUserRegistration, wrapAsync(userController.register));
router.post('/login', validateUserLogging, wrapAsync(userController.login));

module.exports = router;
