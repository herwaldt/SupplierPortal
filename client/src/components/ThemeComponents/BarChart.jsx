import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Paper, Grid, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  paper: {
    minWidth: '80vw',
    margin: theme.spacing(1),
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minWidth: '80vw',
    margin: 'auto',
  },
  barchart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

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
        <Card className={classes.card}>
          <Grid className={classes.gridColumn}>
            <Typography variant="h4" component="h2">
              On-Time Delivery (OTD)
            </Typography>
            <div style={{ position: "relative", margin: "auto", width: "80vw", height: '30vh' }}>
              <Bar
                data={data}
                options={options}
                className={classes.barchart}
              />
            </div>
          </Grid>
        </Card>
      </Paper>
    </Grid>
  );
}
