import { Button, makeStyles, Grid} from "@material-ui/core";
import React from "react";


const mainStyles = makeStyles((theme) => ({
  button: {
    top: "500%",
    color: "#3fd2c7",
    fontSize: "20px",
  },

  menuPaper: {
    width: "75%",
  },
}));

export default function LandingPage() {
  const classes = mainStyles();
  return (
    <div>
      <Grid container xs={12} direction="row" spacing={8} justify="center">
        <Grid item>
          <Button
            style={{ backgroundColor: "transparent" }}
            disableRipple="true"
            className={classes.button}
          >
            ABOUT
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{ backgroundColor: "transparent" }}
            disableRipple="true"
            className={classes.button}
          >
            Projects
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{ backgroundColor: "transparent" }}
            disableRipple="true"
            className={classes.button}
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
