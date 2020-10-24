import React from "react";
import { ListItem, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  PageStyle: {
    marginTop: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#E2E6ED", //#005587 #339898 #E89923 #DAD0C6 #E2E6ED #B5B5B5
    height: "90vh",
    width: "95%",
  },
  TitleStyle: {
    paddingTop: "2vh",
    paddingLeft: "2vw",
    color: "#005587",
    fontWeight: "500",
  },
});

const Backdrop = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.PageStyle}>
        <Typography variant="h2" className={classes.TitleStyle}>
          {props.page}
        </Typography>
        <ListItem divider />
        {props.children}
      </Paper>
    </div>
  );
};

export default Backdrop;
