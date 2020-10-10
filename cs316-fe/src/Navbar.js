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
  BarStyle: {
    marginTop: "5vh",
    marginLeft: "auto",
    marginRight: "auto",
    background: "slategrey",
    height: "90vh",
    width: "90%",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Navbar</Typography>
      <Paper className={classes.BarStyle}></Paper>
    </div>
  );
};

export default Navbar;
