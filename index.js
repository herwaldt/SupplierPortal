const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/Receipts');
require('./models/Quality');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(keys.mongoURI, options);

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

require('./routes/uploadData')(app);
require('./routes/receiptData')(app);
require('./routes/qualityData')(app);

app.listen(5001);
