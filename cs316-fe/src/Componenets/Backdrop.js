import React from "react";
import {
  Button,
  ListItem,
  makeStyles,
  Paper,
  Typography,
  InputBase,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
    paddingRight: "4vw",
    color: "#005587",
    fontWeight: "500",
    display: "flex",
  },
  search: {
    position: "relative",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    //borderRadius: theme.shape.borderRadius,
    /*backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },*/
    marginLeft: 0,
    width: "100%",
    /*[theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },*/
  },
  searchIcon: {
    //padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  filter: {
    //padding: theme.spacing(0, 2),
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
});

const Backdrop = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.PageStyle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h2" className={classes.TitleStyle} noWrap>
            {props.page}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <TextField
            className={classes.filter}
            id="filled-select-currency"
            select
            label="Select"
            //value={currency}
            //onChange={handleChange}
            helperText="Please select your currency"
            variant="filled"
          >
            {/*currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))*/}
          </TextField>
          {props.firebase && (
            <Button variant="contained" onClick={props.firebase.logout}>
              Submit
            </Button>
          )}
        </div>
        <ListItem divider />
        {props.children}
      </Paper>
    </div>
  );
};

export default Backdrop;
