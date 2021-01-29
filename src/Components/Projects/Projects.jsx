import { Grid } from "@material-ui/core";
import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

export default function Projects() {
  return (
    <div id="Projects" style={{ height: "700px", marginBottom: "300px" }}>
      <Grid container justify="center" direction="row" spacing={8}>
        <Grid  item>
          <ProjectOne />
        </Grid>
        <Grid   item>
          <ProjectTwo />
        </Grid>
        <Grid  item>
          <ProjectThree />
        </Grid>
      </Grid>
    </div>
  );
}
