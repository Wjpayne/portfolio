import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const aboutMeStyles = makeStyles(() => ({


  name: {
    opacity: "0",
    position: "relative",
    transition: "1s",
    textAlign: "center",
    top: "40%"
  
  },

  nameAppear: {
    opacity: "1",
    position: "relative",
    textAlign: "center",
    transition: "1s",
    top: "40%",
    fontSize: "50px"
  },

  text: {
    fontSize: "20px",
    position: "relative",
    textAlign: "center",
    top: "40%",
    opacity: "0",
    transition: "3s"
  },

  textAppear: {
    fontSize: "20px",
    position: "relative",
    textAlign: "center",
    top: "40%",
    opacity: "1",
    transition: "3s"
  },





}));

export default function AboutMe() {
  const classes = aboutMeStyles();

  //set state for fade in and out

  const [name, setName] = useState("name");
  const [text, setText] = useState("text")

  const nameRef = useRef();
  const textRef = useRef()

  nameRef.current = name
  textRef.current = text

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1100;
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
        const show = window.scrollY > 1100;
        if (show) {
          setText("textAppear")
        } else {
          setText("text")
        }
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };


  }, [])
  return (
    <>
     <div id = "AboutMe" style = {{height: "1300px", top: "80%"}}>
      <Typography className={classes[nameRef.current]}>HI I'M WILLIAM</Typography>
      <br></br>
      <Typography className={classes[textRef.current]}>A full stack engineer with a focus</Typography>
      <Typography className={classes[textRef.current]}>on front end development</Typography>
      <br></br>
      <Typography className={classes[textRef.current]}>Proficient in React.JS, Redux,</Typography>
      <Typography className={classes[textRef.current]}>Node.JS, and the MERN stack</Typography>
      
    </div>
    </>
  );
};



