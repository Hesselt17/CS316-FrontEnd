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

import image1 from "../../../Assets/BlackwellDouble.JPG";
import image2 from "../../../Assets/BrownDouble.JPG";
import image3 from "../../../Assets/GAD2.JPG";
import image4 from "../../../Assets/RandolphD.JPG";
import image5 from "../../../Assets/GilesSingle.JPG";
import image6 from "../../../Assets/SouthgateDouble.JPG";
import image7 from "../../../Assets/RandolphDouble1.JPG";
import image8 from "../../../Assets/TrinityHall.JPG";
import image9 from "../../../Assets/GACR.JPG";

import Backdrop from "../../Backdrop"; //Different from Materail-UI's backdrop
import ModalDesign from "../../ModalDesign";

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

var imageData = [
  {
    img: image1,
    title: "BlackwellDouble",
    author: "Tommy",
  },
  {
    img: image2,
    title: "BrownDouble",
    author: "Tommy",
  },
  {
    img: image3,
    title: "GAD2",
    author: "Tommy",
  },
  {
    img: image4,
    title: "RandolphDouble1",
    author: "Tommy",
  },
  {
    img: image5,
    title: "GilesSingle",
    author: "Tommy",
  },
  {
    img: image6,
    title: "SouthgateDouble",
    author: "Tommy",
  },
  {
    img: image7,
    title: "RandolphD",
    author: "Tommy",
  },
  {
    img: image8,
    title: "TrinityHall",
    author: "Tommy",
  },
  {
    img: image9,
    title: "GACR",
    author: "Tommy",
  },
];

const Explore = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [design, setDesign] = useState({});
  const [imgs, setImgs] = useState([]);
  const firebaseCaller = props.firebase;

  useEffect(() => {
    const fetchImgs = async (imageArray) => {
      console.log(imageArray);
      var imgUrl = "";
      for (let i = 0; i < imageArray.length; i++) {
        imgUrl = await firebaseCaller.renderExplore(imageArray[i].title);
        setImgs((prevImgs) => [...prevImgs, imgUrl]);
      }
    };
    fetchImgs(imageData);
  }, []);

  const handleOpen = (tile) => {
    console.log(tile.title);
    setDesign(tile);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop page="Explore">
        <div className={classes.root}>
          <GridList
            cellHeight={200}
            spacing={100}
            className={classes.gridList}
            cols={4}
          >
            {/*<GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
  </GridListTile>*/}
            {imgs.map((tile) => (
              <GridListTile key={tile} onClick={() => handleOpen(tile)}>
                <img src={tile} alt={tile} />
                <GridListTileBar
                  title={tile}
                  subtitle={<span>By: {tile}</span>}
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
            <ModalDesign open={open} image={design} onClose={handleClose} />
          </GridList>
        </div>
      </Backdrop>
    </div>
  );
};

export default Explore;
