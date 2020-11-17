import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";

const Button = styled.button`
  color: "#005587";
  padding: 0.8em;
  width: 15em;
  margin: 1em;
  background-color: white;
  border-radius: 10px;
  border: 3.5px solid #005587;
  cursor: pointer;
  transition: ease background-color 150ms;
  &: hover {
    background-color: lightgrey;
  }
`;

const useStyles = makeStyles({
  PageStyle: {
    marginTop: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3vh",
    background: "#a6a6a6",
    height: "90vh",
    width: "95%",
  },
  PageStyle1: {
    background: "white",
    marginTop: "5vh",
    marginBottom: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    height: "30vh",
  },

  TitleStyle: {
    paddingTop: "19vh",
    paddingBottom: "2vh",
    color: "White",
    fontWeight: "600",
    fontSize: 100,
    textAlign: "center",
  },
  TextStyle: {
    paddingTop: "5vh",
    paddingBottom: "6vh",
    color: "White",
    fontWeight: "200",
    fontSize: 40,
    textAlign: "center",
  },
  OuterGridStyle: {
    width: "100%",
    justifyContent: "left",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  OuterGridStyleText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ImageStyle: {
    height: "35vh",
    width: "35vw",
    paddingTop: "4vh",
    paddingLeft: "2vh",
    paddingBottom: "1vh",
  },
});

const initialState = {
  Email: "",
  Password: "",
  ErrorObj: null,
};

const Login2 = (props) => {
  const classes = useStyles();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onLogin = (e) => {
    const { Email, Password } = state;
    props.firebase
      .login(Email, Password)
      .then((authUser) => {
        setState({ ...initialState });
        alert("Successfully logged in!");
        props.history.push("/home");
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          ErrorObj: error,
        }));
      });
    e.preventDefault();
  };

  const [textInput, setTextInput] = useState({
    avatar: null,
    bio:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "",
    name: "",
    netid: "hpw97",
    password: "",
    score: 0,
    wherelive: "",
  });

  return (
    <div>
      <Paper className={classes.PageStyle}>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3vh",
          }}
        >
          <Grid container spacing={10}>
            <Grid item xs={4} className={classes.OuterGridStyle}>
              <iframe
                title="setup"
                width="600"
                height="800"
                frameBorder="0"
                src="https://momento360.com/e/u/15444867432c4a3797c398608c02bea8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium>"
              />
            </Grid>
            <Grid item xs={6} className={classes.OuterGridStyleText}>
              <Grid
                container
                spacing={20}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <Typography variant="h2" className={classes.TitleStyle}>
                    Design Duke
                  </Typography>
                </Grid>
                <Paper className={classes.PageStyle1}>
                  <Grid
                    container
                    spacing={10}
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={5}>
                      <TextField
                        id="Email"
                        type="string"
                        label="Insert Email"
                        helperText={"Email"}
                        value={state.email}
                        variant="outlined"
                        required="true"
                        onChange={handleChange}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        id="Password"
                        type="string"
                        label="Insert Password"
                        helperText={"Password"}
                        value={state.password}
                        variant="outlined"
                        required="true"
                        onChange={handleChange}
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={5}>
                      <Button className={classes.Button} onClick={onLogin}>
                        <Typography variant="h6">LOGIN</Typography>
                      </Button>
                      {state.ErrorObj && <p>{state.ErrorObj.message}</p>}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Login2;
