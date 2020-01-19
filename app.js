require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', require('./api/routes/users'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});