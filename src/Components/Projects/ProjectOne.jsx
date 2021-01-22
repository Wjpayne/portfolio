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

export default function ExpandButton() {
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
          title="The Blast Beat"
          subheader="An App to curate your record collection"
        />

        <CardMedia className={classes.cardIMG} />
        <CardContent>
          <Typography></Typography>
        </CardContent>
        <CardActions>
          <IconButton
            style={{ backgroundColor: "transparent" }}
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
            <br></br>
            <br></br>MongoDB<br></br>Express<br></br>React<br></br>Node.js
          </Typography>
        </Collapse>
      </Card>
    </div>
  );
}
