import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import ProfileUploadLayout from "./ProfileUploadLayout";
import ProfileMenu from "./ProfileMenu";
import AboutMe from "./AboutMe";
import Backdrop from "../../Backdrop";

//Styling for the Page
const useStyles = makeStyles({
  OuterGridStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Profile = (props) => {
  const classes = useStyles();
  const [currUser, setCurrUser] = useState([]);

  useEffect(() => {
    setCurrUser(props.auth);
    console.log(currUser);
  }, []);

  return (
    <div>
      <ProfileMenu />
      <Backdrop page="Profile" firebase={props.firebase}>
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
              <Paper style={{ height: "75vh", color: "#E2E6ED" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h2"
                    style={{ paddingLeft: "1rem", color: "#005587" }}
                  >
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
              <Paper style={{ height: "75vh", color: "#E2E6ED" }}>
                <Typography
                  variant="h2"
                  style={{
                    paddingLeft: "1rem",
                    paddingBottom: "2vh",
                    color: "#005587",
                  }}
                >
                  My Uploads
                </Typography>
                <ProfileUploadLayout userID={props.auth.uid} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Backdrop>
    </div>
  );
};

export default Profile;
