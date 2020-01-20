  
const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.use('/users', require('../api/routes/users'));

module.exports = server;