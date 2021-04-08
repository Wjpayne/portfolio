import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

const projectStyles = makeStyles((theme) => ({
  div: {
    height: "1500px",
    position: "relative",
    width: "100%",
    marginTop: "200px",
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      height: "2300px",
    },

    [theme.breakpoints.down("md")]: {
      position: "relative",
      height: "2300px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      height: "3400px",
      left: "50%",
      transform: "translate(-50%)",
      
    },
  },
}));

export default function Projects() {
  const classes = projectStyles();
  return (
    <div id="Projects" style={{ padding: 40 }}>
      <div className={classes.div}>
        <Grid container justify="center" direction="row" spacing = {5}>
          <Grid item>
            <ProjectFour />
          </Grid>
          <Grid item>
            <ProjectThree />
          </Grid>
          <Grid item>
            <ProjectOne />
          </Grid>
          <Grid item>
            <ProjectTwo />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
