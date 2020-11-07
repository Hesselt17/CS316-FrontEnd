import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const initialState = {
  Name: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  ErrorObj: null,
};

const Signup = (props) => {
  //console.log(props.firebase);
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSignup = (e) => {
    const { Name, Email, Password } = state;
    props.firebase
      .register(Email, Password)
      .then((authUser) => {
        setState({ ...initialState });
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

  return (
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
  );
};

export default Signup;
