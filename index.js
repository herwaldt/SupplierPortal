const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/Receipts');
require('./models/Quality');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, { useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

require('./routes/uploadData')(app);
require('./routes/receiptData')(app);
require('./routes/qualityData')(app);

app.listen(5001);
