import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';


import Image from '../images/xriteWebsiteBanner.jpg'
import SignIn from './SignIn';

const useStyles = makeStyles({
  backgroundImg: {

    overflow: "hidden",
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    minWidth: 500,
    width: 500,
    margin: 'auto',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '93vh',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.grid}>
          <SignIn />
      </Grid>

    </>
  );
};

export default Header;