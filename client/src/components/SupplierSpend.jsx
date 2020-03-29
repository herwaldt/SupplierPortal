import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BarChart from './ThemeComponents/BarChart';
import MetricDetailScore from './ThemeComponents/MetricDetailScore';
import { fetchSpend, fetchOverview } from '../actions/index';
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

const SupplierSpend = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const overview = useSelector((state) => state.overview);
  const dateRange = useSelector((state) => state.dateRange);

  useEffect(() => {
    dispatch(fetchSpend());
    dispatch(fetchOverview());
  }, []);

  let calcMetric = '$0';
  if (overview) {
    calcMetric = `$${Math.round(overview[dateRange].spend)}` || '$0';
  }

  return (
    <>
      <BackButton />
      <Grid className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <MetricDetailScore
            calcMetric={calcMetric}
            letterGradeLabel="Spend Score"
            metricTitle="Total Supplier Spend"
          />
          <Grid item container className={classes.gridRow}>
            <BarChart dataLabel="Dollars Spent" metric="spendMetric" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SupplierSpend;
