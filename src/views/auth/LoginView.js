import React, { useState, useEffect } from "react";
import Alert from '@material-ui/lab/Alert';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useNavigate } from 'react-router-dom';
// import { Redirect } from 'react-router';
import { login, authenticateAdmin, isAuthenticatedAdmin } from '../../methods/authMethods.js';
import Background from '../../assets/images/bg.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    email: 'test@test.com',
    password: 'test',
  })
  const [error, setError] = useState('');

  useEffect(() => {

    // isAuthenticatedAdmin()
    //   .then(res => {
    //     if(res) {
    //       console.log('Already logged in!')
    //       console.log(res)
    //       // history.push('/admin/dashboard')
    //     }
    //   })
    //   .catch(e => {})
      // eslint-disable-next-line
  }, [])
  

  const handleCred = (e, name) => {
    setCred({
      ...cred,
      [name]: e.target.value.trim(),
    })
  }

  const onSubmitForm = e => {

    e.preventDefault();

    function success(data) {
      authenticateAdmin(data, function() {
        navigate('/app/dashboard')
      })
    }

    function failure(error) {
      setError(error);
    }

    login(cred, success, failure)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} metod="post" onSubmit={onSubmitForm}>
            <TextField
              variant="outlined"
              margin="normal"
              color="secondary"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={cred.email}
              onChange={(e) => handleCred(e, 'email')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={cred.password}
              onChange={(e) => handleCred(e, 'password')}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Alert style={{display: !!error ? 'flex':'none'}} severity="error">{error}</Alert>
            {
              // <Grid container>
              //            <Grid item xs>
              //              <Link href="#" variant="body2">
              //                Forgot password?
              //              </Link>
              //            </Grid>
              //            <Grid item>
              //              <Link href="#" variant="body2">
              //                {"Don't have an account? Sign Up"}
              //              </Link>
              //            </Grid>
              //          </Grid>
                      }
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
