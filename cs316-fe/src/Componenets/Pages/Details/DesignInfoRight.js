import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import axiosAPI from "../../Axios/API";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const DesignInfoRight = (props) => {
  //const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const currUser = JSON.parse(localStorage.getItem("CurrentUser"));

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    axiosAPI.reviews
      .getDesignReviews(props.design.designid)
      .then((res) => {
        const data = res.data;
        console.log(data.result);
        setReviews(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Typography
        variant="h4"
        style={{
          paddingLeft: "1rem",
          paddingTop: "2vh",
          color: "#005587",
        }}
      >
        {reviews.length}
      </Typography>
      {reviews.map((review) => {
        <Typography
          variant="h4"
          key={review.uid}
          style={{
            paddingLeft: "1rem",
            paddingTop: "2vh",
            color: "#005587",
          }}
        >
          Hey
        </Typography>;
      })}
    </div>
  );
};

export default DesignInfoRight;
