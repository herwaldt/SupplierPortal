import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Link, Grid, AppBar, Toolbar, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'rgb(232, 140, 0)',
    height: 90,
    zIndex: 1,
  },
  text: {
    height: '90%',
    color: theme.palette.secondary.main,
  },
  grid: {
    height: 100,
    alignItems: 'center',
    align: 'center',
    justify: 'center',
  },
}));


const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar>
          <Link href="/scorecard">
            <Grid container className={classes.grid}>
              <Grid item>
                <Typography variant="h2" className={classes.text}>
                  Supplier Portal
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
