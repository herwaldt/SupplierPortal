import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, CardContent, Card, Paper, Grid, Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardRight: {
    minWidth: '60vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLeft: {
    minWidth: '20vw',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
  },
  paper: {
    minWidth: 300,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridScore: {
    minWidth: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  gridReceipts: {
    minWidth: '25vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  button: {
    minWidth: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
}));

function MetricScore() {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.cardLeft}>
      <Grid container direction="column" className={classes.grid}>
        <CardContent>
          <Grid item container spacing={2} className={classes.grid}>
            <Grid item container direction="column" className={classes.grid}>
              <Typography variant="h4" component="h2">
              OTD Score:
              </Typography>
            </Grid>
            <Typography variant="h1">
              B
            </Typography>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

function MetricDetail({ total, badMetric }) {
  const classes = useStyles();

  const calc = total - badMetric ? Math.round((( total - badMetric ) / total ) * 100) + '%' : 0;

  return (
    <Card elevation={0} className={classes.cardRight}>
      <Grid container direction="row" className={classes.grid}>
        <CardContent>
          <Grid item className={classes.grid}>
            <Grid item container direction="column" className={classes.gridScore}>
                <Typography variant="h1" className={classes.metric}>
                  {calc}
                </Typography>
            </Grid>
            <Grid item container direction="column" className={classes.gridReceipts}>
              <Typography variant="h4" component="h2">
              Total Receipts: {total}
              </Typography>
              <Typography variant="h4" component="h2">
              Late Receipts: {badMetric} 
              </Typography>
            </Grid>
              <Button size="large" className={classes.button} variant="contained" color="primary">
                Export Data
              </Button>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default function MetricDetailScore({ total, badMetric }) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container direction="row">
        <MetricScore />
        <MetricDetail total={total} badMetric={badMetric}/>
      </Grid>
    </Paper>
  );
}
