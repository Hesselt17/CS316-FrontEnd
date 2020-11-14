import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
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
    width: "90%",
    height: "60vh",
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

const ProfileUploadLayout = (props) => {
  const classes = useStyles();
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    getUploads();
  }, []);

  const getUploads = () => {
    axiosAPI.users
      .getUserUploads(props.userID)
      .then((res) => {
        const data = res.data;
        setUploads(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {/*<GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
  </GridListTile>*/}
        {uploads.map((tile) => (
          <GridListTile key={tile.designid}>
            <img src={tile.photo} alt={tile.uid} />
            <GridListTileBar
              title={tile.caption}
              subtitle={<span>by: {tile.uid}</span>}
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
      </GridList>
    </div>
  );
};

export default ProfileUploadLayout;
