import { makeStyles, Paper, Slide, Typography, Fade } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import SVG from "./SVG";
import "./index.css";

const menuStyles = makeStyles((theme) => ({
  paper: {
    width: "1200px",
    height: "700px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    top: "400px",
    [theme.breakpoints.down('lg')]: {
      top: "200px",
  }
},

  game: {
    fontFamily: "Orbitron",
    left: "210px",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  secondGame: {
    fontFamily: "Orbitron",
    left: "225px",
    top: "445px",
    position: "absolute",
    color: "#2565ae",
  },
  about: {
    left: "447px",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  project: {
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
  },

  resume: {
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
  },

  contact: {
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
  },

  aboutRotate: {
    left: "447px",
    transition: "1s",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  aboutRotateTwo: {
    left: "447px",
    transition: "1s",
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  aboutRotateThree: {
    left: "447px",
    transition: "1s",
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  projectRotate: {
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    transition: "1s",
  },

  projectRotateTwo: {
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    transition: "1s",
  },

  projectRotateThree: {
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    transition: "1s",
  },

  resumeRotate: {
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    transition: "1s",
  },

  resumeRotateTwo: {
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    transition: "1s",
  },

  resumeRotateThree: {
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    transition: "1s",
  },

  contactRotate: {
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    transition: "1s",
  },

  contactRotateTwo: {
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    transition: "1s",
  },

  contactRotateThree: {
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    transition: "1s",
  },

  text: {
    fontSize: "30px",
  },
  gameText: {
    fontSize: "17px",
  },
  secondGameText: {
    fontSize: "17px",
  },
}));

export default function Menu() {
  const classes = menuStyles();

  //set state for render

  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);
  const [game, setGame] = useState(false);

  // set state for rotation

  const [aboutMove, setAboutMove] = useState("about");
  const [projectMove, setProjectMove] = useState("project");
  const [resumeMove, setResumeMove] = useState("resume");
  const [contactMove, setContactMove] = useState("contact");

  const aboutRef = useRef();
  const projectRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  aboutRef.current = aboutMove;
  projectRef.current = projectMove;
  resumeRef.current = resumeMove;
  contactRef.current = contactMove;

  // set timing for game
  useEffect(() => {
    setInterval(() => {
      setGame(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setGame(false);
    }, 4000);
  }, []);

  //set timing of about
  useEffect(() => {
    setTimeout(() => {
      setAbout(true);
    }, 700);

    setTimeout(() => {
      setAboutMove("aboutRotate");
    }, 1000);

    setTimeout(() => {
      setAboutMove("aboutRotateTwo");
    }, 1500);
    setTimeout(() => {
      setAboutMove("aboutRotateThree");
    }, 2000);

    setTimeout(() => {
      setAboutMove("aboutRotate");
    }, 2500);
  }, []);

  //set timing for project

  useEffect(() => {
    setTimeout(() => {
      setProject(true);
    }, 1200);

    setTimeout(() => {
      setProjectMove("projectRotate");
    }, 1500);
    setTimeout(() => {
      setProjectMove("projectRotateTwo");
    }, 2000);
    setTimeout(() => {
      setProjectMove("projectRotateThree");
    }, 2500);
    setTimeout(() => {
      setProjectMove("projectRotate");
    }, 3000);
  }, []);

  //set Timing for resume

  useEffect(() => {
    setTimeout(() => {
      setResume(true);
    }, 1700);

    setTimeout(() => {
      setResumeMove("resumeRotate");
    }, 2000);
    setTimeout(() => {
      setResumeMove("resumeRotateTwo");
    }, 2500);
    setTimeout(() => {
      setResumeMove("resumeRotateThree");
    }, 3000);
    setTimeout(() => {
      setResumeMove("resumeRotate");
    }, 3500);
  }, []);

  //set timing for contact

  useEffect(() => {
    setTimeout(() => {
      setContact(true);
    }, 2000);

    setTimeout(() => {
      setContactMove("contactRotate");
    }, 2300);

    setTimeout(() => {
      setContactMove("contactRotateTwo");
    }, 2700);

    setTimeout(() => {
      setContactMove("contactRotateThree");
    }, 3200);
    setTimeout(() => {
      setContactMove("contactRotate");
    }, 3700);
  }, []);

  //parralex

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <SVG />

        <div  className={classes.game}>
          <Fade in={game} timeout={1000}>
            <h1 className={classes.gameText}>Wanna play</h1>
          </Fade>
        </div>

        <div className={classes.secondGame}>
          <Fade in={game} timeout={500}>
            <h1 className={classes.secondGameText}>a game?</h1>
          </Fade>
        </div>

        <div className={classes[aboutRef.current]}>
          <Slide direction="left" in={about} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>About me</Typography>
          </Slide>
        </div>

        <div className={classes[projectRef.current]}>
          <Slide direction="right" in={project} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>Projects</Typography>
          </Slide>
        </div>

        <div className={classes[resumeRef.current]}>
          <Slide direction="left" in={resume} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>Resume</Typography>
          </Slide>
        </div>

        <div className={classes[contactRef.current]}>
          <Slide direction="right" in={contact} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>Contact</Typography>
          </Slide>
        </div>
      </Paper>
    </>
  );
}
