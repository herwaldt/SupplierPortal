import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, CardContent, Card, Paper, Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
  },
  paper: {
    minWidth: 300,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    margin: theme.spacing(5),
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metric: {
    paddingTop: theme.spacing(3),
  },
}));

export default function TotalOverviewScore() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Card elevation={0} className={classes.card}>
        <Grid container direction="column" className={classes.grid}>
          <CardContent>
            <Grid item container spacing={2} className={classes.grid}>
              <Grid item container direction="column" className={classes.grid}>
                <Typography variant="h4" component="h2">
                Total Score:
                </Typography>
                <Typography variant="body1" component="p">
                  Based on performance for the metrics below.
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.grid}>
              <Typography variant="h1" className={classes.metric}>
                B
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
      </Card>
    </Paper>
  );
}
