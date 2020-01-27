import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BarChart from './ThemeComponents/BarChart';
import MetricDetailScore from './ThemeComponents/MetricDetailScore';
import { fetchLateByMonth, fetchReceiptsByMonth } from '../actions/index';

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
  const receipt = useSelector((state) => state.receipts);
  console.log(receipt);

  useEffect(() => {
    dispatch(fetchLateByMonth());
    dispatch(fetchReceiptsByMonth());
  }, []);

  return (
    <>
      <Grid container className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <MetricDetailScore />
          <Grid item container className={classes.gridRow}>
            <BarChart />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Scorecard;
