import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";

const ProfileEdit = (props) => {
  const [user, setUser] = useState({});

  const [textInput, setTextInput] = useState({
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/users%2FtestAvatar.jpg?alt=media&token=ee06b370-8a58-4942-8942-9ab7050d3783",
    bio: "BET",
    email: "",
    name: "",
    netid: "hpw97",
    password: "aaaaaa",
    score: 0,
    wherelive: "",
  });

  useEffect(() => {
    const data = props.location.state;
    console.log(data.user);
    setUser(data.user);
  }, []);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setTextInput({
      ...textInput,
      [evt.target.id]: value,
    });
  };

  const submitEdits = () => {
    axios
      .put(`http://vcm-17053.vm.duke.edu:5000/users/${user.uid}`, textInput)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = () => {
    axios
      .delete(`http://vcm-17053.vm.duke.edu:5000/users/${user.uid}`, textInput)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h3">Edit Profile(s)</Typography>
      <TextField
        id="name"
        label="Insert Name"
        value={textInput.name}
        onChange={handleChange}
        helperText={"Current Name - " + user.name}
      />
      <div>
        <TextField
          id="email"
          label="Insert Email"
          value={textInput.email}
          onChange={handleChange}
          helperText={"Current Email - " + user.email}
        />
      </div>
      <div>
        <TextField
          id="score"
          type="int"
          label="Insert Score"
          value={textInput.score}
          onChange={handleChange}
          helperText={"Current Score - " + user.score}
        />
      </div>
      <div>
        <TextField
          id="wherelive"
          label="Insert Residence"
          value={textInput.wherelive}
          onChange={handleChange}
          helperText={"Current Residence - " + user.wherelive}
        />
      </div>
      <div style={{ paddingTop: "5vh" }}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={submitEdits}
        >
          Submit Edits
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={deleteUser}
        >
          Delete Current User
        </Button>
      </div>
    </div>
  );
};

export default ProfileEdit;
