const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const csvtojson = require('csvtojson');
const receipts = require('./models/Receipts');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, { useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
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
              res.error('There was an error when inserting the data to Mongodb.');
              receipts.close();
            } else {
              console.log(result);
              res.end(`Inserted ${result.insertedCount} records.`);
              receipts.close();
            }
          });
        });
    } else {
      res.end('The file needs to be attached to process.');
    }
  });
});

app.post('/api/lates', upload.single('statement'), (req, res) => {
  console.log(`new upload = ${req.file.filename}\n`);
  console.log(req.file);

  fs.exists(req.file.path, (exists) => {
    if (exists) {
      csvtojson()
        .fromFile(req.file.path)
        .then((csvData) => {
          let countLatesAdded = 0;
          // eslint-disable-next-line no-unused-vars
          const updateLates = csvData.map((obj) => {
            // eslint-disable-next-line no-plusplus
            ++countLatesAdded;
            const filter = { transactionId: obj.transactionId };
            const update = {
              $set: {
                late: obj.late,
                daysLate: obj.daysLate,
                internalOrExternal: obj.internalOrExternal,
                reasonCode: obj.reasonCode,
                comments: obj.comments,
              },
            };
            return receipts.collection.updateOne(filter, update, { multi: true })
              .then(console.log(obj));
          });
          res.send(`Updated ${countLatesAdded} late records.`);
        });
    } else {
      res.end('The file needs to be attached to process.');
    }
  });
});

app.listen(5001);
