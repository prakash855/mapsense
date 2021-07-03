import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./SignUp.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/Covid_Background.png)",
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

export default function SignInSide(props) {
  const classes = useStyles();
  
  const history = useHistory()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pinCode, setPinCode] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    history.push('/homepage')
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('pinCode',pinCode)
  };

  const resetHandler = () => {
    setFirstName('')
    setLastName('')
    setPinCode('')
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            style={{ width: "9rem", margin: "1.3rem" }}
            src="/Mapsense Logo.png"
            alt="Mapsense Logo.png"
          />
        </div>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="First Name"
              name="firstname"
              value={firstName}
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={lastName}
              name="lastname"
              label="Last Name"
              autoComplete="Last Name"
            />
            <TextField
              onChange={(e) => setPinCode(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              value={pinCode}
              fullWidth
              label="Pincode"
              name="pincode"
            />
            <Button
              onClick={submitHandler}
              style={{
                top: "1.7rem",
                backgroundColor: "#332272",
                color: "white",
                height: "53px",
                fontSize: "20px",
                fontWeight: 900,
              }}
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Show Statstics
            </Button>
            <Button
            onClick={resetHandler}
              style={{
                backgroundColor: "#FF3838",
                color: "white",
                height: "53px",
                fontWeight: 900,
                fontSize: "20px",
              }}
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Reset Form
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
