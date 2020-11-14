import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, Button, Modal, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    height: "50vh",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalDesign = (props) => {
  //TODO: Add specifier in props for what kind of tiles being selected
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        {...props}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="modal-title">{props.tile.caption && props.tile.caption}</h2>
            <p id="modal-description">{props.tile.uid && props.tile.uid}</p>
            {/*<iframe
              title={props.tile.designid}
              width="350"
              height="400"
              frameBorder="0"
              src="https://momento360.com/e/u/15444867432c4a3797c398608c02bea8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium>"
            />*/}
            <Link
              to={{
                pathname: "/details",
              }}
            >
              View Details
            </Link>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalDesign;
