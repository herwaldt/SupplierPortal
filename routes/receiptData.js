const mongoose = require('mongoose');

const Receipts = mongoose.model('receipts');

module.exports = (app) => {
  app.get('/api/data/receipt', async (req, res) => {
    const lates = await Receipts.find({ internalOrExternal: 'External' });
    await Receipts.countDocuments().exec((err, count) => {
      if (err) {
        res.send(err);
        return;
      }
      res.json({ totalReceipts: count, lates });
    });
  });

  app.get('/api/data/receiptsbymonth', (req, res) => {
    Receipts.aggregate([
      {
        $project: {
          _id: 0,
          month: { $month: '$transactionDate' },
          year: { $year: '$transactionDate' },
        },
      },
      {
        $group: {
          _id: {
            year: '$year',
            month: '$month',
          },
          count: {
            $sum: 1,
          },
        },
      },
    ])
      .exec()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  });
};
