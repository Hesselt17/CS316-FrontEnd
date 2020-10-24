import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import ProfileUploadLayout from "./ProfileUploadLayout";
import ProfileMenu from "./ProfileMenu";
import AboutMe from "./AboutMe";

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
  const [currUser, setCurrUser] = useState([]);

  useEffect(() => {
    var min = 1;
    var max = 100;
    var rand = Math.floor(min + Math.random() * (max - min));
    //console.log(rand);
    axios
      .get(`http://vcm-17053.vm.duke.edu:5000/users/${rand}`)
      .then((res) => {
        const data = res.data;
        setCurrUser(data.result);
        //console.log("DATA", data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSelectUser = () => {
    setCurrUser(null);
  };

  return (
    <div>
      <Paper className={classes.PageStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2" className={classes.TitleStyle}>
            Profile
          </Typography>
          <ProfileMenu />
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3vh",
          }}
        >
          <Grid container spacing={10} className={classes.OuterGridStyle}>
            <Grid item xs={6}>
              <Paper style={{ height: "75vh" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h2" style={{ paddingLeft: "1rem" }}>
                    About Me
                  </Typography>
                  <Link
                    to={{
                      pathname: "/profile/edit/" + currUser.uid,
                      state: { user: currUser },
                    }}
                  >
                    Edit
                  </Link>
                </div>
                <AboutMe user={currUser} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ height: "75vh" }}>
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
