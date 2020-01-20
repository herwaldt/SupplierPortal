import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Paper, Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    minWidth: 200,
    width: '35vw',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    margin: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
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
    minWidth: 300,
  },
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minWidth: '100vh',
    marginTop: theme.spacing(5),
    margin: 'auto',
  },
}));

export default function MonthSwitch() {
  const classes = useStyles();
  const [dateRange, setDateRange] = React.useState('3Month');

  const handleChange = (event, newDateRange) => {
    if (newDateRange !== dateRange) {
      setDateRange(newDateRange);
    }
  };

  const children = [
    <ToggleButton key={1} value="3Month">
        Last 3 months
    </ToggleButton>,
    <ToggleButton key={2} value="6Month">
        Last 6 Months
    </ToggleButton>,
    <ToggleButton key={3} value="12Month">
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
