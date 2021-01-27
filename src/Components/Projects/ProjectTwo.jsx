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
import CarouselProjectTwo from "./CarouselProjectTwo";

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
    width: "400px",
  },
  text: {
    margin: "5px",
  },
  cardIMG: {
    height: "200px",
  },
  content: {

    marginTop: "70px",
    
  },

  link: {
    color: "black"
  }
 
}));

export default function ProjectTwo() {
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
          title="Path Visualizer"
          subheader="A Web App that let's you have a little fun with algorithms"
        />

        <CardMedia className={classes.cardIMG} component={CarouselProjectTwo} />

        <CardContent className={classes.content}>
          Check out the live project{" "}
          <a
            className={classes.link}
            target="blank"
            href="https://theblastbeat.herokuapp.com/"
          >
            here
          </a>
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
            A complete Front End Web App to visualize Dijkstra's Algorithm in a
            game like enviornment. Allows to set walls anywhere on the map and
            see how the algorithm works based on user input
          </Typography>
          <Divider />
          <Typography className={classes.text}>React</Typography>
          <Typography className={classes.text}>Redux</Typography>
          <Typography className={classes.text}>Html</Typography>
          <Typography className={classes.text}>Css</Typography>
        </Collapse>
      </Card>
    </div>
  );
}
