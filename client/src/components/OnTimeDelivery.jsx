import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BarChart from './ThemeComponents/BarChart';
import MetricDetailScore from './ThemeComponents/MetricDetailScore';
import { fetchOnTime, fetchOverview } from '../actions/index';

const useStyles = makeStyles(() => ({
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minHeight: '76vh',
    minWidth: '100vh',
    margin: 'auto',
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Scorecard = () => {
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
  if (overview) {
    lateReceipts = overview[dateRange]['lateReceipts'];
    receipts = overview[dateRange]['receipts'];
  };

  return (
    <>
      <Grid container className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <MetricDetailScore total={receipts} badMetric={lateReceipts}/>
          <Grid item container className={classes.gridRow}>
            <BarChart />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Scorecard;
