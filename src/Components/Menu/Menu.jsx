import { makeStyles, Paper, Slide, Typography, Fade } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import SVG from "./SVG";
import "./index.css";

const algoStyles = makeStyles((theme) => ({
  paper: {
    width: "1200px",
    height: "700px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    top: "400px",
  },

  game: {
    left: "220px",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  secondGame: {
    left: "235px",
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
    left: "785px",
    color: "#2565ae",
  },

  contact: {
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
  },

  gameRotate: {
    left: "220px",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },
  secondGameRotate: {
    left: "235px",
    transformOrigin: "0 50%",
    top: "435px",
    position: "absolute",
    color: "#2565ae",
  },

  aboutRotate: {
    left: "447px",
    transform: "rotate(90deg)",
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
  },

  resumeRotate: {
    top: "415px",
    position: "absolute",
    left: "785px",
    color: "#2565ae",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
  },

  contactRotate: {
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
  },

  text: {
    fontSize: "30px",
  },
  gameText: {
    fontSize: "17px",
  },
}));

export default function Algo() {
  const classes = algoStyles();

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
  // const [gameMove, setGameMove] = useState("game")
  // const [gameSecondMove, setSecondGameMove] = useState("game")

  const aboutRef = useRef();
  const projectRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();
  // const gameRef = useRef();
  // const secondGameRef = useRef();

  aboutRef.current = aboutMove;
  projectRef.current = projectMove;
  resumeRef.current = resumeMove;
  contactRef.current = contactMove;
  // gameRef.current = gameMove
  // secondGameRef.current = gameSecondMove

  // set timing for game
  useEffect(() => {


    setInterval(() => {
      setGame(true);
    }, 1000);

  }, []);

  useEffect(() => {
    setInterval(() => {
      setGame(false);
    }, 2000);


  }, []);

  //set timing of about
  useEffect(() => {
    setTimeout(() => {
      setAbout(true);
    }, 1000);

    setTimeout(() => {
      setAboutMove("aboutRotate");
    }, 1500);
  }, []);

  //set timing for project

  useEffect(() => {
    setTimeout(() => {
      setProject(true);
    }, 1500);

    setTimeout(() => {
      setProjectMove("projectRotate");
    }, 2000);
  }, []);

  //set Timing for resume

  useEffect(() => {
    setTimeout(() => {
      setResume(true);
    }, 2500);

    setTimeout(() => {
      setResumeMove("resumeRotate");
    }, 3200);
  }, []);

  //set timing for contact

  useEffect(() => {
    setTimeout(() => {
      setContact(true);
    }, 2000);

    setTimeout(() => {
      setContactMove("contactRotate");
    }, 2500);
  }, []);

  //parralex

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <SVG />

        <div className={classes.game}>
          <Fade in={game} timeout={1000}>
            <Typography className={classes.gameText}>Wanna play</Typography>
          </Fade>
        </div>

        <div className={classes.secondGame}>
          <Fade in={game} timeout={500}>
            <Typography className={classes.secondGameText}>a game?</Typography>
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
