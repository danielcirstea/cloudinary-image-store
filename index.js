require('dotenv').config();

const express = require('express');
const http = require('http');
const app = express();
const config = require('./lib/common/config')();
const helmet = require('helmet');
const { api } = require('./lib');
const bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api', api);
app.use('*', (req, res) => {
    res.status(200).json({ status: 'online' });
});

http.createServer(app).listen(config.app.port,() => {
    console.log(`Listening on ${config.app.port}`);
});