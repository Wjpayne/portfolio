import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const aboutMeStyles = makeStyles(() => ({
  text: {
    position: "relative",
    textAlign: "center",
    top: "40%"
  },


}));

export default function AboutMe() {
  const classes = aboutMeStyles();
  return (
    <>
     <div id = "AboutMe" style = {{height: "1300px", top: "100%"}}>
      <Typography className={classes.text}>About meeeeeeeeeeeeeee</Typography>
      
    </div>
    </>
  );
};



