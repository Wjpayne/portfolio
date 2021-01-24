import { makeStyles, Paper, Slide } from "@material-ui/core";
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

  about: {
    fontSize: "30px",
    left: "267px",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  project: {
    fontSize: "30px",
    top: "415px",
    position: "absolute",
    left: "490px",
    color: "#2565ae",
  },

  resume: {
    fontSize: "30px",
    top: "415px",
    position: "absolute",
    left: "785px",
    color: "#2565ae",
  },

  contact: {
    fontSize: "30px",

    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
  },

  aboutRotate: {
    fontSize: "30px",
    left: "267px",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    color: "#2565ae",
  },

  projectRotate: {
    fontSize: "30px",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "490px",
    color: "#2565ae",
  },

  resumeRotate: {
    fontSize: "30px",
    top: "415px",
    position: "absolute",
    left: "785px",
    color: "#2565ae",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
  },

  contactRotate: {
    fontSize: "30px",
    transform: "rotate(90deg)",
    transformOrigin: "0 50%",
    top: "415px",
    position: "absolute",
    left: "1025px",
    color: "#2565ae",
  },
}));

export default function Algo() {
  const classes = algoStyles();

  //set state for render

  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);

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
    }, 2000)
  }, []);

  //set Timing for resume

  useEffect(() => {
    setTimeout(() => {
      setResume(true);
    }, 2500);

    setTimeout(() => {
      setResumeMove("resumeRotate")
    }, 3000)
  }, []);

  //set timing for contact

  useEffect(() => {
    setTimeout(() => {
      setContact(true);
    }, 2000);

    setTimeout(() => {
      setContactMove("contactRotate")
    }, 2500)
  }, []);

  //parralex

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        
        <SVG />
        

        <div className={classes[aboutRef.current]}>
          <Slide direction="left" in={about} mountOnEnter unmountOnExit>
            <p>About Me</p>
          </Slide>
        </div>

        <div className={classes[projectRef.current]}>
          <Slide direction="right" in={project} mountOnEnter unmountOnExit>
            <p>Projects</p>
          </Slide>
        </div>

        <div className={classes[resumeRef.current]}>
          <Slide direction="left" in={resume} mountOnEnter unmountOnExit>
            <p>Resume</p>
          </Slide>
        </div>

        <div className={classes[contactRef.current]}>
          <Slide direction="right" in={contact} mountOnEnter unmountOnExit>
            <p>Contact</p>
          </Slide>
        </div>
      </Paper>
    </>
  );
}
