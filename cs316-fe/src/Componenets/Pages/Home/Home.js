import React, { useEffect, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
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
import axiosAPI from "../../Axios/API";

import Backdrop from "../../Backdrop"; //Different from Materail-UI's backdrop
import ModalDesign from "../../ModalDesign";

//TODO: Look into load order -- React Lifecycle
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

const Home = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [designs, setDesigns] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  useEffect(() => {
    const photoViewer = new Viewer({
      container: "photoViewer",
      panorama:
        selected.photo ||
        "https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/images%2FBlackwell%20Double.JPG?alt=media&token=837befd1-98b6-45ef-8347-cdcf07220c87", //image8,
      navbar: ["fullscreen"], //https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/images%2FBlackwell%20Double.JPG?alt=media&token=837befd1-98b6-45ef-8347-cdcf07220c87
    });
    return () => {
      photoViewer.destroy();
    };
  }, [selected]); //insert photo name

  useEffect(() => {
    getImgs();
  }, [props]);

  const getImgs = () => {
    axiosAPI.explore
      .getExploreImages()
      .then((res) => {
        const data = res.data;
        console.log("DATA", data.result);
        setDesigns(data.result);
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
      <div
        style={{
          overflow: "auto",
        }}
      >
        <div id="photoViewer" style={{ width: "50px", height: "80px" }} />
      </div>
      <div>
        <Backdrop
          page="Home"
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
              {/*<GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
  </GridListTile>*/}
              {filters.length < 1 &&
                designs.slice(0, 20).map((tile) => (
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
    </div>
  );
};

export default Home;
