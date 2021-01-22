import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import clsx from "clsx";

const expandStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  card: {
    width: "300px",
  },
  text: {
    margin: "5px",
  },
}));

export default function ProjectThree() {
  const classes = expandStyles();

  //set State for expand

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          title="Relish"
          subheader="An App to search and find recipes based on user preferences"
        />

        <CardMedia className={classes.cardIMG} />
        <CardContent>
          <Typography></Typography>
        </CardContent>
        <CardActions>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            disableRipple={true}
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded}>
          <Typography className={classes.text}>
            A Complete Full Stack Application using the MERN stack. Includes
            complete user authentification, an API to keep track of user data,
            full CRUD capabilities, and completely responsive for mobile
          </Typography>
          <Divider />
          <Typography className={classes.text}>MongoDB</Typography>
          <Typography className={classes.text}>Express</Typography>
          <Typography className={classes.text}>React</Typography>
          <Typography className={classes.text}>Node.js</Typography>
        </Collapse>
      </Card>
    </div>
  );
}
