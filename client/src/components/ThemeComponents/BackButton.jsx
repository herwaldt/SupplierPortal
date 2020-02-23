import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Fab, Grid, Link } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    top: theme.spacing(15),
    right: theme.spacing(10),
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(2),
      right: theme.spacing(5),
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default function BackButton() {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridColumn}>
      <Link href="/scorecard" style={{ textDecoration: 'none' }}>
        <Fab elevation={1} color="primary" aria-label="back" className={classes.fab}>
          <ArrowBackRoundedIcon />
        </Fab>
      </Link>
    </Grid>
  );
}
