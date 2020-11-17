import React, { useState, useEffect } from "react";
import {
  Button,
  makeStyles,
  Paper,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core/";
import InfoIcon from "@material-ui/icons/Info";

import Backdrop from "../../Backdrop";
import ModalDesign from "../../ModalDesign";

import axiosAPI from "../../Axios/API";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "750px",
    backgroundColor: "#F3F2F1", //#E2E6ED, #E5E5E5, #F3F2F1
    alignItems: "center",
    paddingTop: "3vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Likes = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    getLikes();
  }, []);

  const getLikes = () => {
    axiosAPI.likes
      .getUserLikes(props.auth.uid)
      .then((res) => {
        const data = res.data;
        console.log("DATA", data.result);
        setLikes(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpen = (tile) => {
    setSelected(tile);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop page="Likes">
        <div className={classes.root}>
          <GridList
            cellHeight={200}
            spacing={100}
            className={classes.gridList}
            cols={4}
          >
            {likes.slice(0, 10).map((designs) => (
              <GridListTile key={designs.designid}>
                <img
                  src={designs.avatar}
                  alt={designs.uid}
                  onClick={() => handleOpen(designs)}
                />
                <GridListTileBar
                  title={designs.name}
                  subtitle={<span>Bio: {designs.bio}</span>}
                  onClick={() => handleOpen(designs)}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${designs}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
            <ModalDesign open={open} tile={selected} onClose={handleClose} />
          </GridList>
        </div>
      </Backdrop>
    </div>
  );
};

export default Likes;
