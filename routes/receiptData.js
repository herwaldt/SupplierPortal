const mongoose = require('mongoose');

const Receipts = mongoose.model('receipts');

module.exports = (app) => {
  app.get('/api/data/receipt', async (req, res) => {
    const lates = await Receipts.find({ late: 'Y' });
    await Receipts.countDocuments().exec((err, count) => {
      if (err) {
        res.send(err);
        return;
      }
      res.json({ totalReceipts: count, lates });
    });
  });
};
