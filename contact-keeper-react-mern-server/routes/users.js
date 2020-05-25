const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    register user
// @access  PUBLIC
router.post('/', (req, res) => {
    res.send('register');
});

module.exports = router;