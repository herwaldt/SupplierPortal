import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  backgroundImg: {
    width: "auto",
    overflow: "hidden",
    height: "100%",
    position: "relative",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.backgroundImg}>
        <img  src="landing-colormark.png" />
      </Box>
      <Paper className={classes.paperContainer}>
        Some text to fill the Paper Component
      </Paper>
    </>
  );
};

export default Header;