const express = require('express')
const ServerlessHttp = require('serverless-http')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/name', (req, res) => {
    res.send('Hello Jeelani')
  });

module.exports.businessHandler = ServerlessHttp(app);