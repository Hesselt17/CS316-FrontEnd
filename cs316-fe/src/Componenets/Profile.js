import React from "react";
//import { Link } from "react-router-dom";
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
    marginTop: "5vh",
    marginLeft: "auto",
    marginRight: "auto",
    background: "slategrey",
    height: "90vh",
    width: "90%",
  },
});

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Profile</Typography>
      <Paper className={classes.PageStyle}></Paper>
    </div>
  );
};

export default Profile;
