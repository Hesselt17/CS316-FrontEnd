import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

import BackButton from "../../BackButton";
import axiosAPI from "../../Axios/API";

const useStyles = makeStyles({
  PageStyle: {
    marginTop: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#a6a6a6",
    height: "90vh",
    width: "95%",
  },
  TitleStyle: {
    paddingTop: "2vh",
    paddingLeft: "2vw",
    color: "White",
    fontWeight: "400",
  },
  OuterGridStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorObj: null,
};
const state2 = {
  avatar: null,
  bio: "",
  email: "",
  name: "",
  netid: "",
  password: "",
  score: 0,
  wherelive: "",
};

const Signup = (props) => {
  //console.log(props.firebase);
  const classes = useStyles();
  const [textInput, setTextInput] = useState(state2);
  const [pswdInput, setPswdInput] = useState({
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTextInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setPswdInput({
      ...pswdInput,
      [e.target.id]: value,
    });
  };

  /*
  const onSignup = (e) => {
    const { name, email, password } = textInput;
    props.firebase
      .register(email, password)
      .then((authUser) => {
        setTextInput({ ...initialState });
        props.history.push("/home");
      })
      .catch((error) => {
        setTextInput((prevState) => ({
          ...prevState,
          errorObj: error,
        }));
      });
    e.preventDefault();
  };*/

  const submitEdits = (event) => {
    if (textInput.name === "") {
      alert("Please fill in Name");
    } else if (textInput.netid === "") {
      alert("Please fill in NetID");
    } else if (textInput.email === "") {
      alert("Please fill in Email");
    } else if (
      textInput.email.substr(
        textInput.email.length - 9,
        textInput.email.length
      ) !== "@duke.edu"
    ) {
      alert("Please enter your Duke email address");
    } else if (textInput.password === "") {
      alert("Please fill in Password");
    } else if (pswdInput.confirmPassword === "") {
      alert("Please fill in Confirm Password");
    } else if (textInput.password !== pswdInput.confirmPassword) {
      alert("Passwords do not match. Please try again");
    } else {
      alert("Success!");
      const { name, email, password } = textInput;
      props.firebase
        .register(email, password)
        .then((authUser) => {
          console.log("auth");
          setTextInput({ ...initialState });
          props.history.push("/home");
        })
        .catch((error) => {
          setTextInput((prevState) => ({
            ...prevState,
            errorObj: error,
          }));
        });
      event.preventDefault();
    }
    //state2
    const { name, email, password, netid } = textInput;
    console.log("new user");
    axiosAPI.users
      .makeNewUser(email, name, netid, password)
      .then((res) => {
        const data = res.data;
        console.log("new DATA", data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    props.history.push("/home");
  };

  /*return (
    <div>
      <div>Signup</div>
      <TextField
        id="Name"
        type="string"
        label="Insert Name"
        value={state.Name}
        onChange={handleChange}
        helperText={"Full name"}
      />
      <TextField
        id="Email"
        type="string"
        label="Insert Email"
        value={state.Email}
        onChange={handleChange}
        helperText={"Email"}
      />
      <TextField
        id="Password"
        type="string"
        label="Insert Password"
        value={state.Password}
        onChange={handleChange}
        helperText={"Password"}
      />
      <TextField
        id="ConfirmPassword"
        type="string"
        label="Confirm Password"
        value={state.ConfirmPassword}
        onChange={handleChange}
        helperText={"Confirm Password"}
      />
      <Button variant="contained" onClick={onSignup}>
        Submit
      </Button>
      {state.ErrorObj && <p>{state.ErrorObj.message}</p>}
    </div>
  );*/

  return (
    <div>
      <BackButton />
      <Grid container spacing={10} className={classes.OuterGridStyle}>
        <Grid item xs={6}>
          <Paper style={{ height: "75vh", color: "#E2E6ED" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <iframe
                title="setup"
                width="600"
                height="700"
                frameBorder="0"
                src="https://momento360.com/e/u/15444867432c4a3797c398608c02bea8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium>"
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height: "75vh", color: "#E2E6ED" }}>
            <br></br>
            <br></br>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                style={{ paddingLeft: "1rem", color: "#005587" }}
              >
                Design Duke
              </Typography>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Grid item xs={9}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  required
                  id="name"
                  label="Name"
                  helperText={"Insert Name"}
                  variant="outlined"
                  onChange={handleChange}
                  value={textInput.name}
                />
                <TextField
                  required
                  id="netid"
                  label="NetID"
                  helperText={"Insert NetID"}
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <br></br>

            <Grid item xs={9}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  required
                  style={{ width: 500 }}
                  id="email"
                  label="Email"
                  helperText={"Insert Email"}
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <br></br>

            <Grid item xs={9}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  required
                  id="password"
                  label="Password"
                  helperText={"Insert Password"}
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="confirmPassword"
                  label="Confirm Password"
                  helperText={"Insert Password"}
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <div style={{ paddingTop: "5vh", textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="#005587"
                  style={{ color: "#005587" }}
                  onClick={submitEdits}
                >
                  Sign Up
                </Button>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
          
    </div>
  );
};

export default Signup;
