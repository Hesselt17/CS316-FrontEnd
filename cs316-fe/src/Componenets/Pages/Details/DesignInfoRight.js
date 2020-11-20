import React, { useState, useEffect } from "react";
import { makeStyles, Button, TextField } from "@material-ui/core/";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

import axiosAPI from "../../Axios/API";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36vw",
    maxHeight: "35vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  text: {
    color: "#005587",
  },
}));

const DesignInfoRight = (props) => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const currUser = JSON.parse(localStorage.getItem("CurrentUser"));
  const initialInput = {
    designid: props.design.designid,
    uid: currUser.result.uid,
    comment: "",
    rating: 0,
  };
  const [input, setInput] = useState(initialInput);

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (!id.includes("comment")) {
      setInput((prevInput) => ({
        ...prevInput,
        rating: parseInt(value),
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
      }));
    }
    console.log(input);
  };
  const handleComment = () => {
    const { designid, uid, comment, rating } = input;
    axiosAPI.reviews
      .postDesignReview(designid, uid, comment, rating)
      .then((res) => {
        const data = res.data;
        console.log("COMMENT", data.result);
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
      ></Typography>
      <List className={classes.root}>
        {reviews.map((review) => (
          <div>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="User" />
              </ListItemAvatar>
              <ListItemText
                className={classes.text}
                primary={`User: ${review.uid} -- Rating: ${review.rating}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="#005587"
                    ></Typography>
                    {`Comment: ${review.comment}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
      <TextField
        id="comment"
        type="string"
        label="Type to Comment"
        value={input.comment}
        variant="outlined"
        required="true"
        onChange={handleChange}
        margin="normal"
        style={{ margin: "1vh", width: "50%" }}
      />
      <Rating
        name="rating"
        onChange={handleChange}
        defaultValue={2}
        size="small"
      />
      <Button
        variant="contained"
        color="#F3F2F1"
        style={{ margin: "1vh" }}
        onClick={handleComment}
      >
        Comment
      </Button>
    </div>
  );
};

export default DesignInfoRight;
