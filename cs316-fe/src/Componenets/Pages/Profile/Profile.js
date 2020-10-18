import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Card,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import ProfileUploadLayout from "./ProfileUploadLayout";

//Styling for the Page
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

const Profile = () => {
  const classes = useStyles();
  const [profData, setprofData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://vcm-17053.vm.duke.edu:5000/users`)
      .then((res) => {
        const data = res.data;
        setprofData(data.result[0]);
        console.log("DATA", data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Paper className={classes.PageStyle}>
        <Typography variant="h2" className={classes.TitleStyle}>
          Profile
        </Typography>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5vh",
          }}
        >
          <Grid container spacing={10} className={classes.OuterGridStyle}>
            <Grid item xs={6}>
              <Paper style={{ height: "70vh" }}>
                <Typography variant="h2" style={{ paddingLeft: "1rem" }}>
                  Username
                </Typography>
                <Typography variant="h4">{profData.name}</Typography>
                <Typography variant="h4">{profData.bio}</Typography>
                <Typography variant="h4">{profData.score}</Typography>
                <Typography variant="h4">{profData.wherelive}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ height: "70vh" }}>
                <Typography
                  variant="h2"
                  style={{ paddingLeft: "1rem", paddingBottom: "2vh" }}
                >
                  My Uploads
                </Typography>
                <ProfileUploadLayout />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Profile;
