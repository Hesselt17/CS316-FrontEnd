import React from "react";
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
    marginTop: "5vh",
    marginLeft: "auto",
    marginRight: "auto",
    background: "slategrey",
    height: "90vh",
    width: "90%",
  },
  TitleStyle: {
    variant: "h4",
    paddingTop: "2vh",
  },
});

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.PageStyle}>
        <Typography variant="h4" className={classes.TitleStyle}>
          Profile
        </Typography>
      </Paper>
    </div>
  );
};

export default Profile;
