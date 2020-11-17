import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const initialState = {
  Email: "",
  Password: "",
  ErrorObj: null,
};

const Login2 = (props) => {
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

  return (
    <div>
      <div>Login</div>
      <TextField
        id="Email"
        type="string"
        label="Insert Email"
        helperText={"Email"}
        value={state.email}
        onChange={handleChange}
      />
      <TextField
        id="Password"
        type="string"
        label="Insert Password"
        helperText={"Password"}
        value={state.password}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={onLogin}>
        Login
      </Button>
      {state.ErrorObj && <p>{state.ErrorObj.message}</p>}
    </div>
  );
};

export default Login2;
