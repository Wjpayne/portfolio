import { Button, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const mainStyles = makeStyles((theme) => ({
  button: {
    top: "200px",
    color: "#3fd2c7",
    fontSize: "20px",
  },
}));

export default function LandingPage() {
  const classes = mainStyles();

  return (
    <div>
      <div>
        <Grid container direction="row" spacing={8} justify="center">
          <Grid item>
            <Button
              style={{ backgroundColor: "transparent" }}
              disableRipple= {true}
              className={classes.button}
              component={Link}
              to={"/#AboutMe"}
            >
              ABOUT
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{ backgroundColor: "transparent" }}
              disableRipple= {true}
              className={classes.button}
              component={Link}
              to={"/#Projects"}
            >
              Projects
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{ backgroundColor: "transparent" }}
              disableRipple= {true}
              className={classes.button}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
