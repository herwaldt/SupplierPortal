import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Link, Grid, AppBar, Toolbar,
} from '@material-ui/core';

import Logo from '../images/xritelogo-white.png';

const useStyles = makeStyles({
  AppBar: {
    backgroundColor: 'rgb(232, 140, 0)',
    height: 80,
  },
  imageProp: {
    height: '90%',
    backgroundImage: `url(${Image})`,
  },
  grid: {
    height: 100,
    alignItems: 'center',
  },
});


const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar>
          <Link href="/scorecard">
            <Grid container className={classes.grid}>
              <img className={classes.imageProp} src={Logo} alt="xrite-logo" />
            </Grid>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
