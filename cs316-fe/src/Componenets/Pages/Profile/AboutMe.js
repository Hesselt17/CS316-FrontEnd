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

const AboutMe = (props) => {
  const classes = useStyles();
  const currUser = props.user;
  return (
    <div>
      <Grid container style={{ paddingTop: "2rem" }}>
        <Grid item style={{ paddingLeft: "1rem" }}>
          <Avatar
            src="/broken-image.jpg"
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
          <TextTyprograhy variant="h5">Name: {currUser.name}</TextTyprograhy>
          <TextTyprograhy variant="h5">
            Score: {currUser.score}/5
          </TextTyprograhy>
          <TextTyprograhy variant="h5">
            On-Campus Residence: {currUser.wherelive}
          </TextTyprograhy>
        </Grid>
        <Grid container item style={{ paddingTop: "10vh" }}>
          <TextTyprograhy variant="h4" style={{ paddingLeft: "1rem" }}>
            Bio:
          </TextTyprograhy>
          <TextTyprograhy variant="h5" style={{ paddingLeft: "1rem" }}>
            {currUser.bio}
          </TextTyprograhy>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
