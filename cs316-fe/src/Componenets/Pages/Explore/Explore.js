import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

import Backdrop from "../../Backdrop"; //Different from Materail-UI's backdrop
import ModalDesign from "../../ModalDesign";
import BackButton from "../../BackButton";

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

const Explore = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [designs, setDesigns] = useState([]);
  const [filters, setFilters] = useState([]);
  const firebaseCaller = props.firebase;

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  useEffect(() => {
    /*
    const fetchImgs = async (imageArray) => {
      //console.log(imageArray);
      var imgUrl = "";
      for (let i = 0; i < imageArray.length; i++) {
        imgUrl = await firebaseCaller.renderExplore(imageArray[i].title);
        setImgs((prevImgs) => [...prevImgs, imgUrl]);
      }
    };
    fetchImgs(imageData);
    console.log(imgs[9]);
    */
    getImgs();
    console.log(filters);
  }, [props]); //http://:vcm@vcm-17053.vm.duke.edu/designs

  const getImgs = () => {
    axiosAPI.explore
      .getExploreImages()
      .then((res) => {
        const data = res.data;
        console.log("DATA", data.result);
        setDesigns(data.result);
        console.log(designs);
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
      {!props.auth && <BackButton />}
      <Backdrop
        page="Explore"
        selection={designs}
        filterer={setFilters}
        currFilter={filters}
      >
        <div className={classes.root}>
          <GridList
            cellHeight={250}
            spacing={25}
            className={classes.gridList}
            cols={4}
          >
            {filters.length < 1 &&
              designs.map((tile) => (
                <GridListTile key={tile.designid}>
                  {tile.typedesign === "room" && (
                    <img
                      src={tile.photo}
                      alt={tile.uid}
                      onClick={() => handleOpen(tile)}
                    />
                  )}
                  {tile.typedesign === "diy" && (
                    <video
                      src={tile.photo}
                      alt={tile.uid}
                      //poster={tile.photo}
                      onClick={() => handleOpen(tile)}
                    />
                  )}
                  <GridListTileBar
                    title={tile.caption}
                    subtitle={<span>By: {tile.uid}</span>}
                    onClick={() => handleOpen(tile)}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile}`}
                        className={classes.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            {filters.length >= 1 &&
              designs
                .filter((tile) =>
                  tile.style.some((style) => filters.includes(style))
                )
                .map((tile) => (
                  <GridListTile key={tile.designid}>
                    {tile.typedesign === "room" && (
                      <img
                        src={tile.photo}
                        alt={tile.uid}
                        onClick={() => handleOpen(tile)}
                      />
                    )}
                    {tile.typedesign === "diy" && (
                      <video
                        src={tile.photo}
                        alt={tile.uid}
                        //poster={tile.photo}
                        onClick={() => handleOpen(tile)}
                      />
                    )}
                    <GridListTileBar
                      title={tile.caption}
                      subtitle={<span>By: {tile.uid}</span>}
                      onClick={() => handleOpen(tile)}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${tile}`}
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
          {/*<video
            src={designs[9]}
            type="video/mp4"
            style={{ width: "240px", height: "240px" }}
            controls
          ></video>*/}
        </div>
      </Backdrop>
    </div>
  );
};

export default Explore;
