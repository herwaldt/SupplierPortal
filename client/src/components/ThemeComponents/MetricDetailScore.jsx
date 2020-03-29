import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, CardContent, Card, Paper, Grid,
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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
    },
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metric: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  gridScore: {
    minWidth: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
    },
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
          <Grid container direction="column" spacing={2} className={classes.grid}>
            <Grid item container direction="column" className={classes.grid}>
              <Typography variant="h4" component="h2" className={classes.metric}>
                {letterGradeLabel}
              </Typography>
            </Grid>
            <Typography variant="h1" className={classes.metric}>
              B
            </Typography>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

function MetricDetail({
  calcMetric, totalMetric, badMetric, totalMetricLabel, badMetricLabel,
}) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.cardRight}>
      <Grid container direction="row" className={classes.grid}>
        <CardContent>
          <Grid item className={classes.metric}>
            <Grid item container direction="column" className={classes.gridScore}>
              <Typography variant="h2" className={classes.metric}>
                {calcMetric}
              </Typography>
            </Grid>
            <Grid item container direction="column" className={classes.gridReceipts}>
              <Typography variant="h5">
                {totalMetricLabel}
                {totalMetric}
              </Typography>
              <Typography variant="h5">
                {badMetricLabel}
                {badMetric}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default function MetricDetailScore({
  metricTitle, calcMetric, totalMetric, badMetric, totalMetricLabel,
  badMetricLabel, letterGradeLabel,
}) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container direction="column" className={classes.grid}>
        <Typography variant="h2" className={classes.metric}>
          {metricTitle}
        </Typography>
        <Grid container direction="row" className={classes.metric}>
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
MetricScore.defaultProps = {
  letterGradeLabel: null,
};

MetricScore.propTypes = {
  letterGradeLabel: PropTypes.string,
};

MetricDetail.defaultProps = {
  calcMetric: null,
  totalMetric: null,
  badMetric: null,
  totalMetricLabel: null,
  badMetricLabel: null,
};

MetricDetail.propTypes = {
  calcMetric: PropTypes.node,
  totalMetric: PropTypes.number,
  badMetric: PropTypes.number,
  totalMetricLabel: PropTypes.string,
  badMetricLabel: PropTypes.string,
};

MetricDetailScore.defaultProps = {
  metricTitle: null,
  calcMetric: null,
  totalMetric: null,
  badMetric: null,
  totalMetricLabel: null,
  badMetricLabel: null,
  letterGradeLabel: null,
};

MetricDetailScore.propTypes = {
  metricTitle: PropTypes.string,
  calcMetric: PropTypes.node,
  totalMetric: PropTypes.number,
  badMetric: PropTypes.number,
  totalMetricLabel: PropTypes.string,
  badMetricLabel: PropTypes.string,
  letterGradeLabel: PropTypes.string,
};
