  
const express = require('express');
const session = require('express-session');
const server = express();

server.use(session({ secret: "secret" }));
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.use('/users', require('../api/routes/users'));

module.exports = server;