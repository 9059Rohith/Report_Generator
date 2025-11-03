const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Route for user signup
// POST /api/auth/signup
router.post('/signup', signup);

// Route for user login
// POST /api/auth/login
router.post('/login', login);

module.exports = router;