import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get(`http://vcm-17053.vm.duke.edu:5000/users`)
      .then((res) => {
        const data = res.data;
        setAllUsers(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Select From All Users
      </Button>
      <Menu
        //id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {allUsers.map((user) => (
          <MenuItem key={user.uid} onClick={handleClose}>
            {user.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
