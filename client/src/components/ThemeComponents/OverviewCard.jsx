import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, Button, CardContent, CardActions, Card, Paper, Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(3),
  },
  paper: {
    minWidth: 300,
    width: '25vw',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
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
  button: {
    padding: theme.spacing(1, 4),
    width: '25vh',
  },
}));

export default function OverviewCard() {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.paper}>
      <Card className={classes.card}>
        <Grid container direction="column" className={classes.grid}>
          <CardContent>
            <Grid item container className={classes.grid} spacing={2}>
              <Grid item direction="column" className={classes.grid}>
                <Typography variant="h4" component="h2">
                    On-Time Delivery
                </Typography>
                <Typography variant="h5" component="h2">
                    (OTD)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="p">
                  This is a measure of late deliveries.
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.grid}>
              <Typography variant="h2" className={classes.metric}>
                98%
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="large" className={classes.button} variant="contained" color="primary">View Data</Button>
          </CardActions>
        </Grid>
      </Card>
    </Paper>
  );
}
