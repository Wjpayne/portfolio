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
    [theme.breakpoints.down("lg")]: {
      top: "100px",
      width: "900px",
      height: "500px",
    },

    [theme.breakpoints.down("xs")]: {
      top: "100px",
      width: "100%",
      height: "240px",
    },
  },

  // game text and responsive attributes

  game: {
    fontFamily: "Orbitron",
    left: "210px",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "153px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "73px",
      top: "140px",
    },
  },

  secondGame: {
    fontFamily: "Orbitron",
    left: "225px",
    top: "445px",
    position: "absolute",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "170px",
      top: "345px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "80px",
      top: "155px",
    },
  },

  // about text and responsive attributes
  about: {
    left: "447px",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "340px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "147px",
      top: "140px",
    },
  },

  aboutRotate: {
    left: "447px",
    transition: "1s",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "340px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "147px",
      top: "140px",
    },
  },

  aboutRotateTwo: {
    left: "447px",
    transition: "1s",
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "340px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "147px",
      top: "140px",
    },
  },

  aboutRotateThree: {
    left: "447px",
    transition: "1s",
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "340px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "147px",
      top: "140px",
    },
  },

  //project text and responsive attributes

  project: {
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "465px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "194px",
      top: "140px",
    },
  },

  projectRotate: {
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "465px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "195px",
      top: "140px",
    },
  },

  projectRotateTwo: {
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "465px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "195px",
      top: "140px",
    },
  },

  projectRotateThree: {
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "625px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "465px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "195px",
      top: "140px",
    },
  },

  //resume text and responsive attributes

  resume: {
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "623px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "249px",
      top: "140px",
    },
  },

  resumeRotate: {
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "623px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "251px",
      top: "140px",
    },
  },

  resumeRotateTwo: {
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "623px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "251px",
      top: "140px",
    },
  },

  resumeRotateThree: {
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "828px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "623px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "251px",
      top: "140px",
    },
  },



  //contact text and responsive attributes

  contact: {
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    [theme.breakpoints.down("lg")]: {
      left: "768px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "302px",
      top: "140px",
    },
  },
  contactRotate: {
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "768px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "305px",
      top: "140px",
    },
    
  },

  contactRotateTwo: {
    transform: "rotate(100deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "768px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "305px",
      top: "140px",
    },
  },

  contactRotateThree: {
    transform: "rotate(80deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
    transition: "1s",
    [theme.breakpoints.down("lg")]: {
      left: "768px",
      top: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "305px",
      top: "140px",
    },
  },

  text: {
    fontSize: "30px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  gameText: {
    fontSize: "17px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
    },
  },
  secondGameText: {
    fontSize: "17px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
    },
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

        <div className={classes.game}>
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
