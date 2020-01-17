import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BarGraph from './ThemeComponents/BarGraph';


const useStyles = makeStyles((theme) => ({
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justify: 'center',
    minHeight: '76vh',
    minWidth: '100vh',
    margin: 'auto',
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const MetricDetail = () => {
  const classes = useStyles();
  return (
    <>  
    
    </>
  );
};

export default MetricDetail;
