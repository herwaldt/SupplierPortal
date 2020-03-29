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
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5">X-Rite Supplier Portal</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
