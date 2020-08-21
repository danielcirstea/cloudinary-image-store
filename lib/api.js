const router = require('express').Router();
const {generateToken, verifyToken} = require('./common/auth');
const {Cloudinary} = require('./controllers');
const cloudinary = new Cloudinary();


//path to request a token
router.post('/auth', generateToken);

//path to get cloudinary statistics
router.get('/statistics', verifyToken, async (req, res) => {
    try {
        const statistics = await cloudinary.getStatistics();
        res.status(200).json(statistics);
    } catch (err) {
        console.log(['[CLOUDINARY][API] Could not retrieve statistics data']);
        res.status(400).json({});
    }
})

//path to export csv data from cloudinary
router.get('/csv', verifyToken, async (req, res) => {
    try {
        const csvData = await cloudinary.getExportData();
        res.header('Content-Type', 'text/csv');
        res.attachment('data.csv');
        res.status(200).send(csvData);
    } catch (err) {
        console.log(['[CLOUDINARY][API] Could not retrieve csv data']);
        res.status(400).json({});
    }
})

module.exports = router;