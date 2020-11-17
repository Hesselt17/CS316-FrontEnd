import React from "react";

import {
  Avatar,
  makeStyles,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles({});

const TextTyprograhy = withStyles({
  root: {
    color: "#005587",
  },
})(Typography);

const initialUser = {
  result: {
    avatar: "",
    bio: "",
    email: "",
    name: "",
    netid: "",
    password: "",
    score: 0,
    uid: 0,
    wherelive: "",
  },
};

const AboutMe = (props) => {
  const classes = useStyles();
  const currUser =
    JSON.parse(localStorage.getItem("CurrentUser")) || initialUser; //props.user;
  //console.log(currUser.result.avatar);
  return (
    <div>
      <Grid container style={{ paddingTop: "2rem" }}>
        <Grid item style={{ paddingLeft: "1rem" }}>
          <Avatar
            src={currUser.result.avatar}
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        </Grid>
        <Grid
          item
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            paddingLeft: "4rem",
          }}
        >
          <TextTyprograhy variant="h5">
            Name: {currUser.result.name}
          </TextTyprograhy>
          <TextTyprograhy variant="h5">
            Score: {currUser.result.score}/5
          </TextTyprograhy>
          <TextTyprograhy variant="h5">
            On-Campus Residence: {currUser.result.wherelive}
          </TextTyprograhy>
        </Grid>
        <Grid container item style={{ paddingTop: "10vh" }}>
          <TextTyprograhy variant="h4" style={{ paddingLeft: "1rem" }}>
            Bio:
          </TextTyprograhy>
          <TextTyprograhy variant="h5" style={{ paddingLeft: "1rem" }}>
            {currUser.result.bio}
          </TextTyprograhy>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
