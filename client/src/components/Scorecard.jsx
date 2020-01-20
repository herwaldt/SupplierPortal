import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import OverviewCard from './ThemeComponents/OverviewCard';
import TotalScore from './ThemeComponents/TotalScore';
import { fetchOverview3month, fetchDelivery } from '../actions/index';

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
  console.log(overview);
  const range = '3Months';


  // const state = {"3Months": {"qtyDefective": 0, "lateReceipts": 0, "qtyTransacted": 0, "receipts": 0}, "6Months": {"qtyDefective": 0, "lateReceipts": 0, "qtyTransacted": 0, "receipts": 0}, "12Months": {"qtyDefective": 0, "lateReceipts": 0, "qtyTransacted": 0, "receipts": 0}}

  // const {
  //   qtyDefective,
  //   lateReceipts,
  //   qtyTransacted,
  //   receipts,
  // } = useSelector((state) => state[overview][range]);

  useEffect(() => {
    dispatch(fetchOverview3month());
  }, []);

  let deliveryCalc = '...loading';
  let defectiveCalc = '...loading';
  if (overview) {
    const { qtyDefective, lateReceipts, qtyTransacted, receipts } = overview[range];

    deliveryCalc = Math.round((( receipts - lateReceipts ) / receipts ) * 100) + '%';
    defectiveCalc = Math.round(( qtyDefective / qtyTransacted ) * 1000000)
  };

  return (
    <>
      <Grid container className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <TotalScore />
          <Grid item container className={classes.gridRow}>
            <OverviewCard title="On Time Delivery" subtitle="(OTD)" desc="This is a measure of late deliveries" calc={deliveryCalc}/>
            <OverviewCard title="Defective Parts Per Million" subtitle="(DPPM)" desc="This is a measure of defective parts" calc={defectiveCalc}/>
            <OverviewCard title="Purchase Price Variance" subtitle="(PPV)" desc="This is a measure of pricing fluctuation" calc="$1506"/>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Scorecard;
