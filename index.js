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

require('./routes/uploadData')(app);
require('./routes/receiptData')(app);
require('./routes/qualityData')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it does not  recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
