import React from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import Backdrop from "../../Backdrop";
import ViewerLeft from "./DesignViewerLeft";
import InfoRight from "./DesignInfoRight";
import DesignInfoRight from "./DesignInfoRight";

const useStyles = makeStyles({
  OuterGridStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Details = (props) => {
  const classes = useStyles();
  //Specify if DIY or Dorm
  console.log(props.location.design);
  const pass = props.location.design;

  return (
    <div>
      <Backdrop page="Details">
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3vh",
          }}
        >
          <Grid container spacing={10} className={classes.OuterGridStyle}>
            <Grid item xs={6}>
              <Paper style={{ height: "75vh", color: "#E2E6ED" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h2"
                    style={{ paddingLeft: "1rem", color: "#005587" }}
                  >
                    Design
                  </Typography>
                </div>
                <ViewerLeft design={pass} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ height: "75vh", color: "#E2E6ED" }}>
                <Typography
                  variant="h2"
                  style={{
                    paddingLeft: "1rem",
                    paddingBottom: "2vh",
                    color: "#005587",
                  }}
                >
                  Design Info
                </Typography>
                {/*Right Paper*/}
                <Typography
                  variant="h4"
                  style={{
                    paddingLeft: "1rem",
                    color: "#005587",
                  }}
                >
                  Comments
                </Typography>
                <DesignInfoRight />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Backdrop>
    </div>
  );
};

export default Details;
