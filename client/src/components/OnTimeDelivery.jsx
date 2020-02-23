import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BarChart from './ThemeComponents/BarChart';
import MetricDetailScore from './ThemeComponents/MetricDetailScore';
import { fetchOnTime, fetchOverview } from '../actions/index';
import BackButton from './ThemeComponents/BackButton';

const useStyles = makeStyles(() => ({
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minHeight: '76vh',
    minWidth: '99vw',
    margin: 'auto',
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const OnTimeDelivery = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const overview = useSelector((state) => state.overview);
  const dateRange = useSelector((state) => state.dateRange);

  useEffect(() => {
    dispatch(fetchOnTime());
    dispatch(fetchOverview());
  }, []);

  let lateReceipts = 0;
  let receipts = 0;
  let calcMetric = '0%';
  if (overview) {
    lateReceipts = overview[dateRange].lateReceipts;
    receipts = overview[dateRange].receipts;
    calcMetric = `${Math.round(((receipts - lateReceipts) / receipts) * 100)}%` || '0%';
  }

  return (
    <>
      <BackButton />
      <Grid className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <MetricDetailScore
            calcMetric={calcMetric}
            totalMetric={receipts}
            badMetric={lateReceipts}
            totalMetricLabel="Total Receipts: "
            badMetricLabel="Late Receipts: "
            letterGradeLabel="OTD Score"
            metricTitle="On Time Delivery"
          />
          <Grid item container className={classes.gridRow}>
            <BarChart dataLabel="OTD Percent" metric="onTimeMetric" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default OnTimeDelivery;
