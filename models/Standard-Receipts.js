const mongoose = require('mongoose');

const { Schema } = mongoose;

const standardPOSchema = new Schema({
  poNumber: String,
  lineNumber: Number,
  vendorName: String,
  vendorSite: String,
  itemNumber: String,
  description: String,
  poType: String,
  unitPrice: Number,
  buyer: String,
  qtyTransacted: Number,
  transactionDate: Date,
  needByDate: Date,
  promiseDate: Date,
});

mongoose.model('standard-receipts', standardPOSchema);
