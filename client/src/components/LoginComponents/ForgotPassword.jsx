import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Grid, Avatar, CssBaseline, TextField, Link, Box, Typography, Container } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        X-Rite, Incorporated. All rights reserved.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(3),
  },  
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '93vh'
  },
  card: {
    minWidth: 500,
    width: 500,
    marginTop: theme.spacing(16),
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '93vh',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Grid className={classes.grid}>
        <Card className={classes.card}>
        <Container component="main" maxWidth="xs" className={classes.paper}>
            <CssBaseline />
            <div className={classes.paper} alignItems="center">
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Reset Password.
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Send Reset Email
                </Button>
                <Grid container>
                <Grid item>
                    <Link href="/account/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>
            <Box className={classes.footer}>
            <Copyright />
            </Box>
        </Container>
        </Card>
    </Grid>
  );
}
