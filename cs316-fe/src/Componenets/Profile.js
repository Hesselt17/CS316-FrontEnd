import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  PageStyle: {
    marginTop: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#a6a6a6",
    height: "90vh",
    width: "90%",
  },
  TitleStyle: {
    paddingTop: "2vh",
    paddingLeft: "2vw",
    color: "White",
    fontWeight: "400",
  },
});

const Profile = () => {
  const classes = useStyles();

  /*useEffect(() => {
    axios
      .get(`http://vcm-17053.vm.duke.edu:5000/users`)
      .then((res) => {
        const data = res.data;
        console.log("DATA", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    <div>
      <Paper className={classes.PageStyle}>
        <Typography variant="h2" className={classes.TitleStyle}>
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Paper>Hey</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper>Hey2</Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Profile;
