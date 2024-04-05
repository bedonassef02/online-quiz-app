const HttpStatus = require('../constants/HttpStatus');
const tokenService = require('./verify-token');

const isAuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Token is required' });
        return;
    }
    try {
        const user = tokenService.verify(token);
        req.user = user;
        next();
    } catch (err) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid token' });
    }
};

module.exports = isAuthMiddleware;