import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    position: "static",
    background: "slategrey",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    textTransform: "capitalize",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Design Duke
          </Typography>
          <Button className={classes.title} component={Link} to="/home">
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button className={classes.title} component={Link} to="/likes">
            <Typography variant="h6">Likes</Typography>
          </Button>
          <Button className={classes.title} component={Link} to="/explore">
            <Typography variant="h6">Explore</Typography>
          </Button>
          <Button className={classes.title} component={Link} to="/community">
            <Typography variant="h6">Community</Typography>
          </Button>
          <Button className={classes.title} component={Link} to="/upload">
            <Typography variant="h6">Upload</Typography>
          </Button>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={Link}
                to="/profile"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
