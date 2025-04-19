// @ts-nocheck
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, (req, res) => {
    res.json({
        message: 'You are authorized to access this route',
        user: req.user
    });
});

module.exports = router;