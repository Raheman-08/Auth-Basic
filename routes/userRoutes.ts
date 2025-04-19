// @ts-nocheck
const express = require('express');
const router = express.Router();
const  { protect }  = require('../middleware/authMiddleware');
const { updateUserProfile } = require('../controllers/userController');

router.get('/profile', protect, (req, res) => {
    res.json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    });
});

router.put('/profile', protect, updateUserProfile);

module.exports = router;
