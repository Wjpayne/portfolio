import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import clsx from "clsx";
import CarouselProjectFour from "./CarouselProjectFour"
import GitHubIcon from "@material-ui/icons/GitHub";

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
    minHeight: "552px",
  },

  text: {
    margin: "5px",
  },

  content: {
    marginTop: "70px",
  },

  link: {
    color: "black",
  },
  title: {
    color: "#2565ae",
  },
  cardIMG: {
    width: "225px",
    height: "400px",
  },
}));

export default function ProjectFour() {
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
          className={classes.title}
          title="Trello Board"
          subheader="An App based on the popular Trello board app. "
        />
        <CardMedia
          className={classes.cardIMG}
          component={CarouselProjectFour}
        ></CardMedia>

        <CardContent className={classes.content}>
          Check out the live project{" "}
          <a
            className={classes.link}
            target="blank"
            href="https://william-trello-board.herokuapp.com/"
          >
            here
          </a>
          <IconButton aria-label="Link to github for trello-clone project">
            <Link
              className={classes.link}
              target="blank"
              href="https://github.com/Wjpayne/trello-clone"
            >
              <GitHubIcon />
            </Link>
          </IconButton>
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
            A Complete Full Stack Application using the MERN stack based on the
            popular Trello application. This App has full user authentification,
            complete CRUD capabilities, and keeps track of every board, list,
            and card made by the user.
          </Typography>
          <Divider />
          <Typography className={classes.text}>MongoDB</Typography>
          <Typography className={classes.text}>Express</Typography>
          <Typography className={classes.text}>React</Typography>
          <Typography className={classes.text}>Node.js</Typography>
          <Typography className={classes.text}>Redux</Typography>
        </Collapse>
      </Card>
    </div>
  );
}
