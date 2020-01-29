import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, CardContent, Card, Paper, Grid, Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardRight: {
    minWidth: '60vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLeft: {
    minWidth: '20vw',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
  },
  paper: {
    minWidth: 300,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridScore: {
    minWidth: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  gridReceipts: {
    minWidth: '25vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  button: {
    minWidth: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
}));

function MetricScore({ letterGradeLabel }) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.cardLeft}>
      <Grid container direction="column" className={classes.grid}>
        <CardContent>
          <Grid item container spacing={2} className={classes.grid}>
            <Grid item container direction="column" className={classes.grid}>
              <Typography variant="h4" component="h2">
              {letterGradeLabel}
              </Typography>
            </Grid>
            <Typography variant="h1">
              B
            </Typography>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

function MetricDetail({ calcMetric, totalMetric, badMetric, totalMetricLabel, badMetricLabel }) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.cardRight}>
      <Grid container direction="row" className={classes.grid}>
        <CardContent>
          <Grid item className={classes.grid}>
            <Grid item container direction="column" className={classes.gridScore}>
                <Typography variant="h2" className={classes.metric}>
                  {calcMetric}
                </Typography>
            </Grid>
            <Grid item container direction="column" className={classes.gridReceipts}>
              <Typography variant="h5">
              {totalMetricLabel} {totalMetric}
              </Typography>
              <Typography variant="h5">
              {badMetricLabel} {badMetric} 
              </Typography>
            </Grid>
              <Button size="large" className={classes.button} variant="contained" color="primary">
                Export
              </Button>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default function MetricDetailScore({ metricTitle, calcMetric, totalMetric, badMetric, totalMetricLabel, badMetricLabel, letterGradeLabel }) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container direction="column" className={classes.grid}>
        <Typography variant="h2" className={classes.metric}>
          {metricTitle}
        </Typography>
        <Grid container direction="row">
          <MetricScore letterGradeLabel={letterGradeLabel} />
          <MetricDetail
            calcMetric={calcMetric}
            totalMetric={totalMetric}
            badMetric={badMetric}
            totalMetricLabel={totalMetricLabel}
            badMetricLabel={badMetricLabel}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
