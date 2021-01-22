import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const algoStyles = makeStyles((theme) => ({

  
    paper: {
        width: "1200px",
        height: "700px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        top: "30%"
    }
  }));

export default function Algo() {

    const classes = algoStyles()
    return (
        <div>

            <Paper className = {classes.paper} elevation={3}>


            </Paper>


            
        </div>
    )
}

