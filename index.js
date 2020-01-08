const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const blanketReceipts = require('./models/Blanket-Receipts'); 
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const csvtojson = require('csvtojson');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.post('/api/upload', upload.single('statement'), (req, res) => {
  console.log(`new upload = ${req.file.filename}\n`);
  console.log(req.file);

  fs.exists(req.file.path, (exists) => {
    if (exists) {
      csvtojson()
        .fromFile(req.file.path)
        .then((csvData) => {
          console.log(csvData);
          blanketReceipts.collection.insertMany(csvData, (error, result) => {
            if (error) {
              res.error('uhoh');
            } else {
              console.log(result);
              res.end(`inserted ${result.length}`);
            }
          });
        });
    } else {
      res.end('Well, there is no magic for those who don’t believe in it!');
    }
  });
});

app.listen(5001);
