import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  AppBar: {
    backgroundColor: 'rgb(232, 140, 0)',
    height: 80,
  },
  imageProp: {
    height: '90%',
  },
});


const Header = () => {
  const classes = useStyles();
  return (
    <>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <img  className={classes.imageProp} src="xritelogo-white.png" alt="xrite-logo" />
          </Toolbar>
        </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
