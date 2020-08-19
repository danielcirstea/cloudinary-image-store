const config = require('./common/config')();
const jwt = require('jsonwebtoken');

const generateToken = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        if (username === config.mock.username && password === config.mock.password) {
            const token = jwt.sign({username: username}, config.app.secret, {expiresIn: '24h'});

            res.status(200).json({
                success: true,
                token: token
            });
        } else {
            res.status(403).json({
                success: false,
                message: 'Incorrect username or password.'
            });
        }
    } else {
        res.status(400).json({
            success: false,
            message: 'Username or password not provided.'
        });
    }
};

const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer ')) token = token.slice(7, token.length);

    if (token) {
        jwt.verify(token, config.app.secret, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(400).json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    verifyToken,
    generateToken,
}
