import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const scrollTopStyles = makeStyles((theme) => ({
  button: {
    top: "200px",
    color: "#3fd2c7",
    fontSize: "20px",
    margin: "auto"
  },

  buttonShow: {
    
    bottom: "30px",
    right: "60px",
    position: "fixed",
    visibility: "show",
    margin: "auto"
  },

  buttonHidden: {
    visibility: "hidden",
    margin: "auto"
  },
}));

export default function ScrollTop() {
  const classes = scrollTopStyles();

  const [buttonHidden, setButtonHidden] = useState("buttonHidden");

  const hideButton = useRef();

 
  hideButton.current = buttonHidden;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setButtonHidden("buttonShow");
      } else {
        setButtonHidden("buttonHidden");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Fab component = {Link} to = {"/#Top"} className={classes[hideButton.current]}  size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
}
