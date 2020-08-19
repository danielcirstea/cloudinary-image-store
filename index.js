const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const helmet = require('helmet');
const { api } = require('./lib');


app.use(helmet());

app.use('/api', api);
app.use('*', (req, res) => {
    res.status(200).json({ status: 'online' });
});


http.createServer(app).listen(port,() => {
    console.log(`Listening on ${port}`);
});