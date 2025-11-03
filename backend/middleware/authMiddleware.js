// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      // Find user by ID from token payload
      req.user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] },
      });

      // Check if user still exists
      if (!req.user) {
        return res.status(401).json({ 
          success: false, 
          message: 'User no longer exists',
          code: 'USER_NOT_FOUND'
        });
      }

      next();
    } catch (error) {
      console.error(error);

      // Handle specific JWT errors
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          success: false, 
          message: 'Token expired. Please login again.',
          code: 'TOKEN_EXPIRED',
          expiredAt: error.expiredAt
        });
      }

      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid token. Please login again.',
          code: 'INVALID_TOKEN'
        });
      }

      // Generic error
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized, token failed',
        code: 'AUTH_FAILED'
      });
    }
  } else {
    // No token provided
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized, no token provided',
      code: 'NO_TOKEN'
    });
  }
};

module.exports = { protect };