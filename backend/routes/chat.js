const express = require('express');
const router = express.Router();
const { generateReport } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

// Route for generating a report
// POST /api/chat/generate
// This route is protected, meaning a user must be logged in to access it.
router.post('/generate', protect, generateReport);

module.exports = router;