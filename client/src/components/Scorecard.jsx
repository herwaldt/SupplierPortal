import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';

import BarChart from './ThemeComponents/BarChart';
import OverviewCard from './ThemeComponents/OverviewCard';
import TotalOverviewScore from './ThemeComponents/TotalOverviewScore';
import { fetchOverview3month, fetchLateByMonth, fetchReceiptsByMonth } from '../actions/index';

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
    dispatch(fetchLateByMonth());
    dispatch(fetchReceiptsByMonth());
  }, []);

  let deliveryCalc = '...loading';
  let defectiveCalc = '...loading';
  if (overview) {
    const { qtyDefective, lateReceipts, qtyTransacted, receipts } = overview[range];

    deliveryCalc = Math.round((( receipts - lateReceipts ) / receipts ) * 100) + '%';
    defectiveCalc = Math.round(( qtyDefective / qtyTransacted ) * 1000000)
  };

  //  BELOW IS BARCHART INFO
  // const receipt = useSelector((state) => state.receipt);
  // let dateRange = 3;
  // let currentDate = new Date();
  // currentDate.setDate(1);

  // if (receipt) {
  //   for (let i=0; i<dateRange; i++) {
  //     currentDate.setMonth(currentDate.getMonth()-1);
  //     const received = receipt.currentDate;
  //   };
  // }
  // currentDate.setMonth(currentDate.getMonth()-1);
  //  ABOVE IS BARCHART INFO

  return (
    <>
      <Grid container className={classes.gridColumn}>
        <Grid container item className={classes.gridRow}>
          <TotalOverviewScore />
            <Grid item container className={classes.gridRow}>
              <OverviewCard title="On Time Delivery" subtitle="(OTD)" desc="This is a measure of late deliveries" calc={deliveryCalc} link="/scorecard/OTD"/>
              <OverviewCard title="Defective Parts Per Million" subtitle="(DPPM)" desc="This is a measure of defective parts" calc={defectiveCalc} link="/scorecard/DPPM"/>
              <OverviewCard title="Purchase Price Variance" subtitle="(PPV)" desc="This is a measure of pricing fluctuation" calc="$1506" link="/scorecard/PPV"/>
            </Grid>
          <BarChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Scorecard;
