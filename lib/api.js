const router = require('express').Router();

router.get('/statistics', (req, res) => {
    res.status(200).json({});
})

router.get('/export', (req, res) => {
    res.status(200).json({});
})

module.exports = router;