import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const aboutMeStyles = makeStyles((theme) => ({
  name: {
    opacity: "0",
    position: "relative",
    transition: "1s",
    textAlign: "center",
    top: "30%",
  },

  nameAppear: {
    opacity: "1",
    position: "relative",
    textAlign: "center",
    transition: "1s",
    top: "30%",
    fontSize: "50px",
  },

  text: {
    fontSize: "20px",
    position: "relative",
    textAlign: "center",
    top: "30%",
    opacity: "0",
    transition: "3s",
  },

  textAppear: {
    fontSize: "20px",
    position: "relative",
    textAlign: "center",
    top: "30%",
    opacity: "1",
    transition: "3s",
  },

  div: {
    height: "1300px",
    top: "80%",
    [theme.breakpoints.down("lg")]: {
      height: "800px",
      top: "50%"
    },
  },
}));

export default function AboutMe() {
  const classes = aboutMeStyles();

  //set state for fade in and out

  const [name, setName] = useState("name");
  const [text, setText] = useState("text");

  const nameRef = useRef();
  const textRef = useRef();

  nameRef.current = name;
  textRef.current = text;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.5;

      if (show) {
        setName("nameAppear");
      } else {
        setName("name");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.5;
      if (show) {
        setText("textAppear");
      } else {
        setText("text");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div >
      <div  id = "AboutMe" className={classes.div}>
        <Typography  className={classes[nameRef.current]}>
          HI I'M WILLIAM
        </Typography>
        <br></br>
        <Typography className={classes[textRef.current]}>
          A full stack engineer with a focus
        </Typography>
        <Typography className={classes[textRef.current]}>
          on front end development
        </Typography>
        <br></br>
        <Typography className={classes[textRef.current]}>
          Proficient in React.JS, Redux, MERN stack,
        </Typography>
        <Typography className={classes[textRef.current]}>
          Node.JS, Javascript, HTML, and CSS.
        </Typography>
      </div>
      </div>
    </>
  );
}
