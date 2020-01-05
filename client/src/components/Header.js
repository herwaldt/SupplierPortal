import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  AppBar: {
    backgroundColor: 'rgb(232, 140, 0)',
  },
});

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