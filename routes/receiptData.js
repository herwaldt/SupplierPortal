const mongoose = require('mongoose');

const Receipts = mongoose.model('receipts');

module.exports = (app) => {
  app.get('/api/data/overviewreceipt', async (req, res) => {
    const lates = await Receipts.find({ internalOrExternal: 'External' });
    await Receipts.countDocuments().exec((err, count) => {
      if (err) {
        res.send(err);
        return;
      }
      res.json({ totalReceipts: count, lates });
    });
  });

  app.get('/api/data/receiptOverview/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
        },
      },
      {
        $project: {
          _id: 0,
          qtyTransacted: '$qtyTransacted',
        },
      },
      {
        $group: {
          _id: title,
          qtyTransacted: {
            $sum: '$qtyTransacted',
          },
          receipts: {
            $sum: 1,
          },
        },
      },
    ])
      .exec()
      .then((result) => {
        res.json(result[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  });

  app.get('/api/data/receiptsByMonth/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
        },
      },
      {
        $project: {
          _id: 0,
          month: { $month: '$transactionDate' },
          year: { $year: '$transactionDate' },
          internalOrExternal: '$internalOrExternal',
        },
      },
      {
        $group: {
          _id: {
            $dateFromParts: {
              year: '$year',
              month: '$month',
              timezone: "America/New_York",
            }
          },
          receiptsByMonth: {
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

  app.get('/api/data/receiptsByMonthAll', (req, res) => {
    const lastMonth = new Date();
    lastMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $lt: lastMonth,
          },
        },
      },
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
            $dateFromParts: {
              year: '$year',
              month: '$month',
              timezone: "America/New_York",
            }
          },
          receiptsbyMonth: {
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

  app.get('/api/data/lateReceiptOverview/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
          internalOrExternal: 'External',
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $group: {
          _id: title,
          lateReceipts: {
            $sum: 1,
          },
        },
      },
    ])
      .exec()
      .then((result) => {
        res.json(result[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  });

  app.get('/api/data/lateByMonth/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
          internalOrExternal: 'External',
        },
      },
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
            $dateFromParts: {
              year: '$year',
              month: '$month',
              timezone: "America/New_York",
            }
            // DateRange: title,
            // year: '$year',
            // month: '$month',
          },
          lateReceiptsByMonth: {
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

  app.get('/api/data/lateByMonthAll', (req, res) => {
    const lastMonth = new Date();
    lastMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $lt: lastMonth,
          },
          internalOrExternal: 'External',
        },
      },
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
            $dateFromParts: {
              year: '$year',
              month: '$month',
              timezone: "America/New_York",
            }
          },
          lateReceiptsByMonth: {
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

  app.get('/api/data/qtyByMonth/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
        },
      },
      {
        $project: {
          _id: 0,
          month: { $month: '$transactionDate' },
          year: { $year: '$transactionDate' },
          qtyTransacted: '$qtyTransacted',
        },
      },
      {
        $group: {
          _id: {
            $dateFromParts: {
              year: '$year',
              month: '$month',
              timezone: "America/New_York",
            }
          },
          qtybyMonth: {
            $sum: '$qtyTransacted',
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

  app.get('/api/data/qtyByMonthAll', (req, res) => {
    const lastMonth = new Date();
    lastMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    Receipts.aggregate([
      {
        $match: {
          transactionDate: {
            $lt: lastMonth,
          },
        },
      },
      {
        $project: {
          _id: 0,
          month: { $month: '$transactionDate' },
          year: { $year: '$transactionDate' },
          qtyTransacted: '$qtyTransacted',
        },
      },
      {
        $group: {
          _id: {
            $dateFromParts: {
              year: '$year',
              month: '$month',
              timezone: "America/New_York",
            }
          },
          qtybyMonth: {
            $sum: '$qtyTransacted',
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
