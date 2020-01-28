import React from 'react';
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
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const lastMonth = new Date();
lastMonth.setDate(1);

let i = 3;
let label = [];
for (; i>0; i-- ) {
  const thisMonth = new Date();
  thisMonth.setMonth(lastMonth.getMonth() - i);

  label.push(monthNames[thisMonth.getMonth()])
};

console.log(label);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'OTD Percent',
      backgroundColor: 'rgb(232,140,0)',
      borderColor: 'rgb(232,140,0)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgb(255,175,0)',
      hoverBorderColor: 'rgb(245,245,245)',
      data: [65, 59, 80, 81, 56, 55, 40],
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
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20,
        },
        display: true,
        position: 'left',
        labels: {
          show: true,
        },
      },
    ],
  },
};

export default function BarChart() {
  const classes = useStyles();

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
