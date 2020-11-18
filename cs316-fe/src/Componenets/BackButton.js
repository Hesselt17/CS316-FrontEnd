import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const BackButton = () => {
  let usrHistory = useHistory();
  const handleBack = () => {
    usrHistory.goBack();
  };

  return (
    <Button
      variant="contained"
      color="#F3F2F1"
      style={{ margin: "1vh" }}
      onClick={handleBack}
    >
      <ArrowBackIcon />
      Back
    </Button>
  );
};

export default BackButton;
