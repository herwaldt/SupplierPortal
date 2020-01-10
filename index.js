const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const csvtojson = require('csvtojson');
const blanketReceipts = require('./models/Blanket-Receipts');
const receipts = require('./models/Receipts');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, { useUnifiedTopology: true });

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
              blanketReceipts.close();
            } else {
              console.log(result);
              res.end(`inserted ${result.insertedCount}`);
              blanketReceipts.close();
            }
          });
        });
    } else {
      res.end('Well, there is no magic for those who don’t believe in it!');
    }
  });
});


app.post('/api/receipt', upload.single('statement'), (req, res) => {
  console.log(`new upload = ${req.file.filename}\n`);
  console.log(req.file);

  fs.exists(req.file.path, (exists) => {
    if (exists) {
      csvtojson()
        .fromFile(req.file.path)
        .then((csvData) => {
          console.log(csvData);
          receipts.collection.insertMany(csvData, (error, result) => {
            if (error) {
              res.error('uhoh');
              receipts.close();
            } else {
              console.log(result);
              res.end(`inserted ${result.insertedCount}`);
              receipts.close();
            }
          });
        });
    } else {
      res.end('Well, there is no magic for those who don’t believe in it!');
    }
  });
});

app.post('/api/late', upload.single('statement'), (req, res) => {
  console.log(`new upload = ${req.file.filename}\n`);
  console.log(req.file);

  fs.exists(req.file.path, (exists) => {
    if (exists) {
      csvtojson()
        .fromFile(req.file.path)
        .then((csvData) => {
          console.log(csvData);

          const filter = { "transactionId": "1000" };
          const update = { $set: { "late": "Y" }};

          receipts.collection.updateOne(filter, update);
        });
    } else {
      res.end('Well, there is no magic for those who don’t believe in it!');
    }
  });
});

app.post('/api/later', (req, res) => {
  const filter = { transactionId: '1001' };
  const update = { $set: { late: 'Y', daysLate: 12 } };
  console.log(req);
  receipts.collection.updateOne(filter, update, { multi: true })
    .then(res.end('inserted!'));
});

app.listen(5001);
