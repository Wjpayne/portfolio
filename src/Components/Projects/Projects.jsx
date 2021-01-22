import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React from "react";

import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

const projectStyles = makeStyles((theme) => ({
  button: {
    top: "500%",
    color: "#3fd2c7",
    fontSize: "20px",
  },

  card: {},
}));

export default function Projects() {
  const classes = projectStyles();

  return (
    <div>
      <Grid container justify="center" direction="row" spacing={8}>
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
  );
}
