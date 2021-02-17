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
  Link,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import clsx from "clsx";
import CarouselProjectThree from "./CarouselProjectThree";
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
  },
  text: {
    margin: "5px",
  },
  cardIMG: {
    height: "225px",
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
          className={classes.title}
          title="Ticket Management System"
          subheader="A CRM ticket system designed to organize, access, and respond to customer requests"
        />

        <CardMedia
          className={classes.cardIMG}
          component={CarouselProjectThree}
        />
        <CardContent className={classes.content}>
          Check out the live project{" "}
          <a
            className={classes.link}
            target="blank"
            href="https://ticket-system-crm.herokuapp.com/"
          >
            here
          </a>
          <IconButton aria-label="Link to github for ricket-system-project">
            <Link
              className={classes.link}
              target="blank"
              href="https://github.com/Wjpayne/ticket-management-system"
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
            A Complete Full Stack Application using the MERN stack. Client and
            server side user authentification. This app is a simple CRM
            application that implements a ticketing system to handle client
            request. An Admin panel is currently being created for this
            application.
          </Typography>
          <Divider />
          <Typography className={classes.text}>MongoDB</Typography>
          <Typography className={classes.text}>Express</Typography>
          <Typography className={classes.text}>React</Typography>
          <Typography className={classes.text}>Node.js</Typography>
          <Typography className={classes.text}>Redux</Typography>
          <Typography className={classes.text}>Redis</Typography>
          <Typography className={classes.text}>Joi</Typography>
        </Collapse>
      </Card>
    </div>
  );
}
