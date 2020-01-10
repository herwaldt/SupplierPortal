const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
});

app.listen(5001);
