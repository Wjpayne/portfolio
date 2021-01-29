import React from 'react'
import Particles from "react-particles-js";
import "./particle.css"


export default function ParticleMap() {
    return (
        <div style = {{height: "1400px"}}>
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
