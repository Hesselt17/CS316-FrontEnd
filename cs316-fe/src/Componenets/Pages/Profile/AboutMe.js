import React from "react";

import { Avatar, Grid, Typography } from "@material-ui/core";

const AboutMe = (currUser) => {
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
          <Typography variant="h5">Name: {currUser.name}</Typography>
          <Typography variant="h5">Score: {currUser.score}/5</Typography>
          <Typography variant="h5">
            On-Campus Residence: {currUser.wherelive}
          </Typography>
        </Grid>
        <Grid container item style={{ paddingTop: "10vh" }}>
          <Typography variant="h4" style={{ paddingLeft: "1rem" }}>
            Bio:
          </Typography>
          <Typography variant="h5" style={{ paddingLeft: "1rem" }}>
            {currUser.bio}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
