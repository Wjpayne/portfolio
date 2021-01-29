import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

const projectStyles = makeStyles((theme) => ({
  div: {
    height: "700px",
    marginBottom: "300px",
    position: "relative",
    top: "200px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      top: "200px",
    },

    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "100px",
      height: "1200px"
    },
  },

  
}));

export default function Projects() {
  const classes = projectStyles();
  return (
    <div id = "Projects" >
    <div className={classes.div}>
      <Grid  container justify="center" direction="row" spacing={3}>
        <Grid item>
          <ProjectOne />
        </Grid>
        <Grid item>
          <ProjectTwo />
        </Grid>
        <Grid item>
          <ProjectThree />
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
