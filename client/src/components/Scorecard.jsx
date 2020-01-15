import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import OverviewCard from './ThemeComponents/OverviewCard';
import MonthSwitch from './ThemeComponents/MonthSwitch';
import TotalScore from './ThemeComponents/TotalScore';

const useStyles = makeStyles((theme) => ({
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minHeight: '76vh',
    minWidth: '100vh',
    marginTop: theme.spacing(5),
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
  return (
    <>  
        <Grid container className={classes.gridColumn}>
          <MonthSwitch/>
          <Grid container item className={classes.gridRow}>
            <TotalScore/>
            <Grid item className={classes.gridRow}>
                <OverviewCard/>
                <OverviewCard/>
                <OverviewCard/>
            </Grid>
          </Grid>
        </Grid>
    </>
  );
};

export default Scorecard;