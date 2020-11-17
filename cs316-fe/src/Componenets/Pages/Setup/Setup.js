import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const Button = styled.button`
  color: "#005587";
  padding: 0.8em;
  width: 15em;
  margin: 1em;
  background-color: white;
  border-radius: 10px;
  border: 3.5px solid #005587;
  cursor: pointer;
  transition: ease background-color 150ms;
  &: hover {
    background-color: lightgrey;
  }
`;

const useStyles = makeStyles({
  PageStyle: {
    marginTop: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3vh",
    background: "#a6a6a6",
    height: "90vh",
    width: "95%",
  },
  TitleStyle: {
    paddingTop: "10vh",
    color: "White",
    fontWeight: "600",
    fontSize: 100,
    textAlign: "center",
  },
  TextStyle: {
    paddingTop: "5vh",
    paddingBottom: "6vh",
    color: "White",
    fontWeight: "200",
    fontSize: 40,
    textAlign: "center",
  },
  OuterGridStyle: {
    width: "100%",
    justifyContent: "left",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  OuterGridStyleText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ImageStyle: {
    height: "35vh",
    width: "35vw",
    paddingTop: "4vh",
    paddingLeft: "2vh",
    paddingBottom: "1vh",
  },
});

const Setup = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.PageStyle}>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3vh",
          }}
        >
          <Grid container spacing={10} alignItems="center" justify="center">
            <Grid item xs={4} className={classes.OuterGridStyle}>
              <iframe
                title="setup"
                width="600"
                height="800"
                frameBorder="0"
                src="https://momento360.com/e/u/15444867432c4a3797c398608c02bea8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium>"
              />
            </Grid>
            <Grid item xs={6} className={classes.OuterGridStyleText}>
              <Grid
                container
                spacing={20}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <Typography variant="h2" className={classes.TitleStyle}>
                    Design Duke
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h3" className={classes.TextStyle}>
                    Everything Duke Dorms
                  </Typography>
                </Grid>
                <Grid>
                  <a href="/explore">
                    <Button className={classes.Button}>
                      <Typography variant="h6">EXPLORE</Typography>
                    </Button>
                  </a>
                </Grid>
                <Grid
                  container
                  spacing={10}
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={5}>
                    <a href="/signup">
                      <Button className={classes.Button}>
                        <Typography variant="h6">SIGN UP</Typography>
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={5}>
                    <a href="/login">
                      <Button className={classes.Button}>
                        <Typography variant="h6">LOGIN</Typography>
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Setup;
