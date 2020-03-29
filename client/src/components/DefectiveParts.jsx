import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BarChart from './ThemeComponents/BarChart';
import MetricDetailScore from './ThemeComponents/MetricDetailScore';
import { fetchQuality, fetchOverview } from '../actions/index';
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

const DefectiveParts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const overview = useSelector((state) => state.overview);
  const dateRange = useSelector((state) => state.dateRange);

  useEffect(() => {
    dispatch(fetchQuality());
    dispatch(fetchOverview());
  }, []);

  let qtyTransacted = 0;
  let qtyDefective = 0;
  let calcMetric = 0;
  if (overview) {
    qtyTransacted = overview[dateRange].qtyTransacted;
    qtyDefective = overview[dateRange].qtyDefective;
    calcMetric = Math.round(((qtyDefective) / qtyTransacted) * 1000000);
  }

  return (
    <>
      <BackButton />
      <Grid className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <MetricDetailScore
            calcMetric={calcMetric}
            totalMetric={qtyTransacted}
            badMetric={qtyDefective}
            totalMetricLabel="Total Quantity: "
            badMetricLabel="Defective Quantity: "
            letterGradeLabel="DPPM Score"
            metricTitle="Defective Parts Per Million"
          />
          <Grid item container className={classes.gridRow}>
            <BarChart dataLabel="Defective Parts Per Million" metric="defectivePartMetric" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DefectiveParts;
