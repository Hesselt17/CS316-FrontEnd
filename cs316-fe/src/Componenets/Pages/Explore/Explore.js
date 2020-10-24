import React from "react";
import {
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

import Backdrop from "../../Backdrop";

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
    height: "700px",
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
    title: "Blackwell Double",
    author: "Tommy",
  },
  {
    img: image2,
    title: "Brown Double",
    author: "Tommy",
  },
  {
    img: image3,
    title: "GA Double",
    author: "Tommy",
  },
  {
    img: image4,
    title: "Randolph Double",
    author: "Tommy",
  },
  {
    img: image5,
    title: "Giles Single",
    author: "Tommy",
  },
  {
    img: image6,
    title: "Southgate Double",
    author: "Tommy",
  },
  {
    img: image7,
    title: "Randolph Double 2",
    author: "Tommy",
  },
  {
    img: image8,
    title: "Trinity Hall",
    author: "Tommy",
  },
  {
    img: image9,
    title: "GA Common Room",
    author: "Tommy",
  },
];

const Explore = () => {
  const classes = useStyles();
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
            {imageData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Backdrop>
    </div>
  );
};

export default Explore;
