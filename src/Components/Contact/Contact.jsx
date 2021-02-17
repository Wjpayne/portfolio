import { Button, Typography, withStyles } from "@material-ui/core";
import React from "react";

//styles for form

const styles = (theme) => ({
  div: {
    height: "600px",
    width: "460px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
    bottom: "-500px",
    [theme.breakpoints.down("xs")]: {
      width: "390px",
      bottom: "-680px"
    },
    [theme.breakpoints.down("md")]: {
      width: "390px",
      bottom: "-1200px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "390px",
      bottom: "-2500px"
    },
  },

  text: {
    margin: "10px",
    height: "200px",
    width: "430px",
    borderRadius: "5px",
    outline: "none",
    resize: "none",
    borderStyle: "inset",
    borderWidth: "2px",
    [theme.breakpoints.down("xs")]: {
      width: "390px",
      
    },
  },
});

//email form for my contact

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    const { classes } = this.props;
    return (
      <div id="Contact" className={classes.div}>
        <Typography
          style={{
            position: "absolute",
            top: "-40px",
            fontSize: "20px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          Contact Form
        </Typography>

        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xeqpnbyy"
          method="POST"
        >
          <input
            placeholder="Email"
            style={{
              margin: "10px",
              height: "25px",
              width: "200px",
              borderRadius: "5px",
              outline: "none",
            }}
            type="Email"
            name="Email"
          />

          <input
            type="text"
            placeholder="Name"
            name="Name"
            style={{
              margin: "10px",
              height: "25px",
              width: "200px",
              borderRadius: "5px",
              outline: "none",
            }}
          />

          <textarea className = {classes.text} type="text" name="Message" />
          {status === "SUCCESS" ? (
            <Typography
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              Thanks!
            </Typography>
          ) : (
            <Button
              style={{
                position: "relative",
                top: "20px",
                left: "50%",
                transform: "translate(-50%)",
              }}
              type="submit"
            >
              Submit
            </Button>
          )}
          {status === "ERROR" && (
            <p
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "50%",
                transform: "translate(-50%)",
                color: "red",
              }}
            >
              Ooops! There was an error.
            </p>
          )}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default withStyles(styles)(MyForm);
