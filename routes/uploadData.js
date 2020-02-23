/* eslint-disable no-param-reassign */
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const csvtojson = require('csvtojson');
const receipts = require('../models/Receipts');
const quality = require('../models/Quality');

module.exports = (app) => {
  app.post('/api/upload/receipt', upload.single('statement'), (req, res) => {
    fs.exists(req.file.path, (exists) => {
      if (exists) {
        csvtojson()
          .fromFile(req.file.path)
          .then((csvData) => {
            csvData.forEach((obj) => {
              if (obj.qtyTransacted) {
                obj.qtyTransacted = Number(obj.qtyTransacted);
              }
              if (obj.unitPrice) {
                obj.unitPrice = Number(obj.unitPrice);
              }
              if (obj.transactionDate) {
                obj.transactionDate = new Date(obj.transactionDate);
              }
              if (obj.needByDate) {
                obj.needByDate = new Date(obj.needByDate);
              }
              if (obj.promiseDate) {
                obj.promiseDate = new Date(obj.promiseDate);
              }
            });
            receipts.collection.insertMany(csvData, (error, result) => {
              if (error) {
                res.error('There was an error when inserting the data to Mongodb.');
              } else {
                res.end(`Inserted ${result.insertedCount} records.`);
              }
            });
          });
      } else {
        res.end('The file needs to be attached to process.');
      }
    });
  });

  app.post('/api/upload/lates', upload.single('statement'), (req, res) => {
    fs.exists(req.file.path, (exists) => {
      if (exists) {
        csvtojson()
          .fromFile(req.file.path)
          .then((csvData) => {
            let countLatesAdded = 0;
            csvData.map((obj) => {
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

  app.post('/api/upload/quality', upload.single('statement'), (req, res) => {
    fs.exists(req.file.path, (exists) => {
      if (exists) {
        csvtojson()
          .fromFile(req.file.path)
          .then((csvData) => {
            csvData.forEach((obj) => {
              if (obj.RDM_Number) {
                obj.RDM_Number = Number(obj.RDM_Number);
              }
              if (obj.Qty_Defective) {
                obj.Qty_Defective = Number(obj.Qty_Defective);
              }
              if (obj.Qty_Rejected) {
                obj.Qty_Rejected = Number(obj.Qty_Rejected);
              }
              if (obj.RDM_Date) {
                obj.RDM_Date = new Date(obj.RDM_Date);
              }
              if (obj.RDM_Close_Date) {
                obj.RDM_Close_Date = new Date(obj.RDM_Close_Date);
              }
              if (obj.Qty_Received) {
                obj.Qty_Received = Number(obj.Qty_Received);
              }
              if (obj.CA_Close_Date) {
                obj.CA_Close_Date = new Date(obj.CA_Close_Date);
              }
              if (obj.PCA_Due_Date) {
                obj.PCA_Due_Date = new Date(obj.PCA_Due_Date);
              }
              if (obj.Date_Material_Received) {
                obj.Date_Material_Received = new Date(obj.Date_Material_Received);
              }
            });
            quality.collection.insertMany(csvData, (error, result) => {
              if (error) {
                res.error('There was an error when inserting the data to Mongodb.');
              } else {
                res.end(`Inserted ${result.insertedCount} records.`);
              }
            });
          });
      } else {
        res.end('The file needs to be attached to process.');
      }
    });
  });
};
