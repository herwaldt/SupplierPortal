const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReceiptSchema = new Schema({
  late: String,
  daysLate: Number,
  transactionId: Number,
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
  releaseNum: Number,
  internalOrExternal: String,
  reasonCode: String,
  comments: String,
});

module.exports = mongoose.model('rtests', ReceiptSchema);
