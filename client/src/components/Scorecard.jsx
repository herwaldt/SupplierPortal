import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import OverviewCard from './ThemeComponents/OverviewCard';

const useStyles = makeStyles((theme) => ({
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '76vh',
    marginTop: theme.spacing(5),
    margin: 'auto',
    justify: 'center',
  },
  gridRow: {
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const Scorecard = () => {
  const classes = useStyles();
  return (
    <>  
        <Grid className={classes.gridColumn} container >
            <Grid className={classes.gridRow}>
                <OverviewCard/>
                <OverviewCard/>
                <OverviewCard/>
            </Grid>
        </Grid>
    </>
  );
};

export default Scorecard;