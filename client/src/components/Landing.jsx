import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

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
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.grid}>
        <Card className={classes.card}>
          <SignIn />
        </Card>
      </Grid>

    </>
  );
};

export default Header;