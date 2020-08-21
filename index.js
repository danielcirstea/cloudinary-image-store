require('dotenv').config();

const express = require('express');
const http = require('http');
const app = express();
const config = require('./lib/common/config')();
const helmet = require('helmet');
const api = require('./lib');
const bodyParser = require('body-parser');
const info = require('./package.json');

app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use('/cloudinary', api);
app.use('*', (req, res) => {
    res.status(200).json({ name: info.name, version: info.version, status: 'online' });
});

http.createServer(app).listen(config.app.port, () => {
    console.log(`Listening on ${config.app.port}.`);
});


