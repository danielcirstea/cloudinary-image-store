const router = require('express').Router();
const {generateToken, verifyToken} = require('./auth');

//path to request a token
router.post('/auth', generateToken);

//path to get cloudinary statistics
router.get('/statistics', verifyToken, (req, res) => {
    res.status(200).json({});
})

//path to export csv data from cloudinary
router.get('/export', verifyToken, (req, res) => {
    res.status(200).json({});
})

module.exports = router;