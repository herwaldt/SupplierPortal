import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Card, Paper, Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { updateDateRange } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '60vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
  },
  paper: {
    width: '35vw',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textSize: '12px',
  },
  buttonGroup: {
    minWidth: '20vw',
  },
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minWidth: '99vw',
    marginTop: theme.spacing(5),
    margin: 'auto',
  },
}));

export default function MonthSwitch() {
  const classes = useStyles();
  const [dateRange, setDateRange] = React.useState('3Months');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateDateRange(dateRange));
  }, [dateRange]);

  const handleChange = (event, newDateRange) => {
    if (newDateRange !== null) {
      setDateRange(newDateRange);
    }
  };

  const children = [
    <ToggleButton key={1} value="3Months">
        Last 3 months
    </ToggleButton>,
    <ToggleButton key={2} value="6Months">
        Last 6 Months
    </ToggleButton>,
    <ToggleButton key={3} value="12Months">
        Last 12 Months
    </ToggleButton>,
  ];

  return (
    <Grid container className={classes.gridColumn}>
      <Paper elevation={0} className={classes.paper}>
        <Card elevation={0} className={classes.card}>
          <Grid container direction="column" className={classes.grid}>
            <ToggleButtonGroup exclusive color="primary" value={dateRange} onChange={handleChange} className={classes.buttonGroup}>
              {children}
            </ToggleButtonGroup>
          </Grid>
        </Card>
      </Paper>
    </Grid>
  );
}
