
import { makeStyles } from '@material-ui/core';
import React from 'react'
import Particles from "react-particles-js";
import "./particle.css"

const particleStyles = makeStyles ((theme) => ({

  div: {
    height: "1400px",
    [theme.breakpoints.down('lg')]: {
      height: "1000px",
  }
}

}))


export default function ParticleMap() {
  const classes = particleStyles()
    return (
        <div className = {classes.div}>
        <Particles
          id="particles-js"
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: "#FFFF66",
              },
              opacity: {
                value: 0.5,
                anim: {
                  enable: true,
                },
              },
              size: {
                value: 7,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                },
              },
              line_linked: {
                enable: true,
              },
              move: {
                speed: 0.2,
              },
            },
          }}
        />
        </div>
    
    )
}
