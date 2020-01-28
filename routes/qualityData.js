const mongoose = require('mongoose');

const Quality = mongoose.model('quality');

module.exports = (app) => {
  app.get('/api/data/defectiveOverview/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Quality.aggregate([
      {
        $match: {
          RDM_Date: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
          Responsibility: 'Supplier',
        },
      },
      {
        $project: {
          _id: 0,
          Qty_Defective: '$Qty_Defective',
        },
      },
      {
        $group: {
          _id: title,
          qtyDefective: {
            $sum: '$Qty_Defective',
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

  app.get('/api/data/qualityByMonth/:id', (req, res) => {
    const months = Number(req.params.id) + 1;
    const title = `${req.params.id}Months`;
    const lastMonth = new Date();
    const firstMonth = new Date();

    lastMonth.setDate(1);
    firstMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    firstMonth.setMonth(firstMonth.getMonth() - months);
    Quality.aggregate([
      {
        $match: {
          RDM_Date: {
            $gt: firstMonth,
            $lt: lastMonth,
          },
          Responsibility: 'Supplier',
        },
      },
      {
        $project: {
          _id: 0,
          month: { $month: '$RDM_Date' },
          year: { $year: '$RDM_Date' },
          Qty_Defective: '$Qty_Defective',
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
          qtyDefectivebyMonth: {
            $sum: '$Qty_Defective',
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

  app.get('/api/data/qualityByMonthAll', (req, res) => {
    const lastMonth = new Date();
    lastMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    Quality.aggregate([
      {
        $match: {
          RDM_Date: {
            $lt: lastMonth,
          },
          Responsibility: 'Supplier',
        },
      },
      {
        $project: {
          _id: 0,
          month: { $month: '$RDM_Date' },
          year: { $year: '$RDM_Date' },
          Qty_Defective: '$Qty_Defective',
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
          qtyDefectivebyMonth: {
            $sum: '$Qty_Defective',
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
