import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Paper, Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '80vw',
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barchart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartDiv: {
    position: 'relative',
    margin: 'auto',
    width: '80vw',
    height: '30vh',
  },
}));

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function BarChart({ dataLabel, metric }) {
  const classes = useStyles();

  const dateRange = useSelector((state) => state.dateRange);
  const onTime = useSelector((state) => state.onTime);
  const quality = useSelector((state) => state.quality);

  const lastMonth = new Date();
  lastMonth.setDate(1);

  let i;
  let j;
  switch (dateRange) {
    case '3Months':
      i = 3;
      j = 3;
      break;
    case '6Months':
      i = 6;
      j = 6;
      break;
    case '12Months':
      i = 12;
      j = 12;
      break;
    default:
      i = 3;
      j = 0;
  }

  const label = [];
  for (; i>0; i-- ) {
    const thisMonth = new Date();
    thisMonth.setDate(1);
    thisMonth.setHours(0,0,0,0);
    thisMonth.setMonth(lastMonth.getMonth() - i);
    label.push(monthNames[thisMonth.getMonth()]);
  }

  let monthlyData = [];
  let chartDetail = {};
  switch (metric) {
    case 'onTimeMetric':
      chartDetail = {
        min: 0,
        max: 100,
        stepSize: 20,
      };
      if (onTime) {
        for (; j>0; j-- ) {
          const thisMonth = new Date();
          thisMonth.setDate(1);
          thisMonth.setHours(0, 0, 0, 0);
          thisMonth.setMonth(lastMonth.getMonth() - j);
          monthlyData.push(
            onTime.find((itmInner) => 
              (itmInner._id).valueOf() === (thisMonth).valueOf()).OnTimePercent,
          );
        };
      };
      break;
    case 'defectivePartMetric':
      if (quality) {
        for (; j>0; j-- ) {
          const thisMonth = new Date();
          thisMonth.setDate(1);
          thisMonth.setHours(0, 0, 0, 0);
          thisMonth.setMonth(lastMonth.getMonth() - j);
          monthlyData.push(
            quality.find((itmInner) =>
              (itmInner._id).valueOf() === (thisMonth).valueOf()).defectiveParts,
          );
        };
      };
      break;
    default:
      monthlyData = [];
  }



  const data = {
    labels: label,
    datasets: [
      {
        label: dataLabel,
        backgroundColor: 'rgb(232,140,0)',
        borderColor: 'rgb(232,140,0)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgb(255,175,0)',
        hoverBorderColor: 'rgb(245,245,245)',
        data: monthlyData,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    responsive: true,
    tooltips: {
      mode: 'label',
    },
    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          type: 'linear',
          ticks: chartDetail,
          display: true,
          position: 'left',
          labels: {
            show: true,
          },
        },
      ],
    },
  };

  return (
    <Grid container direction="column" className={classes.grid}>
      <Paper elevation={2} className={classes.paper}>
        <div className={classes.chartDiv}>
          <Bar
            data={data}
            options={options}
            className={classes.barchart}
          />
        </div>
      </Paper>
    </Grid>
  );
}
