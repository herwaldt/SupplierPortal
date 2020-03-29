import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import OverviewCard from './ThemeComponents/OverviewCard';
import TotalOverviewScore from './ThemeComponents/TotalOverviewScore';
import { fetchOverview, fetchOnTime } from '../actions/index';

const useStyles = makeStyles(() => ({
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minHeight: '76vh',
    width: '98vw',
    margin: 'auto',
  },
  gridRow: {
    display: 'flex',
    width: '98vw',
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
    dispatch(fetchOverview());
    dispatch(fetchOnTime());
  }, []);

  let spendCalc = '$0';
  let deliveryCalc = '0%';
  let defectiveCalc = 0;
  if (overview) {
    const {
      qtyDefective, lateReceipts, qtyTransacted, receipts, spend,
    } = overview[dateRange];

    deliveryCalc = (`${Math.round(((receipts - lateReceipts) / receipts) * 100)}%` || '0%');
    defectiveCalc = Math.round((qtyDefective / qtyTransacted) * 1000000) || 0;
    spendCalc = `$${Math.round(spend)}` || '$0';
  }

  return (
    <>
      <Grid container className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <TotalOverviewScore />
          <Grid item container direction="row" className={classes.gridRow}>
            <OverviewCard title="On Time Delivery" subtitle="(OTD)" desc="This is a measure of late deliveries" calc={deliveryCalc} link="/scorecard/OTD" />
            <OverviewCard title="Defective Parts Per Million" subtitle="(DPPM)" desc="This is a measure of defective parts" calc={defectiveCalc} link="/scorecard/DPPM" />
            <OverviewCard title="Total Supplier Spend" subtitle="(TSS)" desc="This is a measure of total spend." calc={spendCalc} link="/scorecard/TSS" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Scorecard;
