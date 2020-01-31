import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Fab, Grid, Link } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(15),
    right: theme.spacing(10),
  },
}));

export default function BackButton() {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridColumn}>
      <Link href="/scorecard" style={{ textDecoration: 'none' }}>
        <Fab elevation={0} color="primary" aria-label="back" className={classes.fab}>
          <ArrowBackRoundedIcon />
        </Fab>
      </Link>
    </Grid>
  );
}
