import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, Button, CardContent, CardActions, Card, Grid, Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(1),
  },
  card: {
    width: '25vw',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(3),
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      minWidth: '70vw',
      minHeight: '40vh',
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('md')]: {
      width: '30vw',
      height: '40vh',
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    align: 'center',
  },
  gridTitle: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    align: 'center',
    height: '17vh',
  },
  metric: {
    paddingTop: theme.spacing(3),
  },
  button: {
    padding: theme.spacing(1, 4),
    width: '15vw',
    [theme.breakpoints.down('sm')]: {
      minWidth: '45vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '22vw',
    },
  },
}));

export default function OverviewCard({
  title, subtitle, desc, calc, link,
}) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.card}>
      <Grid container direction="column" className={classes.grid}>
        <CardContent className={classes.cardContent}>
          <Grid item container direction="column" className={classes.grid}>
            <Grid item container direction="row" className={classes.gridTitle}>
              <Typography variant="h4" align="center">
                {title}
              </Typography>
              <Grid item container direction="column">
                <Typography variant="h5" align="center">
                  {subtitle}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.grid}>
                {desc}
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.grid}>
            <Typography variant="h2" className={classes.metric}>
              {calc}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          <Link href={link} style={{ textDecoration: 'none' }}>
            <Button size="large" className={classes.button} variant="contained" color="primary">
              More Detail
            </Button>
          </Link>
        </CardActions>
      </Grid>
    </Card>
  );
}

OverviewCard.defaultProps = {
  title: null,
  subtitle: null,
  desc: null,
  calc: null,
  link: null,
};

OverviewCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  desc: PropTypes.string,
  calc: PropTypes.node,
  link: PropTypes.string,
};
