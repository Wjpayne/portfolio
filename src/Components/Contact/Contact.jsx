import { Button, Typography, withStyles, TextField } from "@material-ui/core";
import React from "react";
import { OutlinedInput } from "@material-ui/core";

//styles for form

const styles = (theme) => ({
  div: {
    height: "100%",
    width: "460px",
    position: "relative",
    top: "-200px",
    left: "50%",
    transform: "translate(-50%)",

    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },

  input: {
    backgroundColor: "white",
    margin: "5px",
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
    const { darkState } = this.props;
    return (
      <div>
        <div id="Contact" className={classes.div}>
          <Typography
            style={
              darkState
                ? {
                    position: "absolute",
                    top: "-40px",
                    fontSize: "20px",
                    left: "50%",
                    transform: "translate(-50%)",
                    color: "white",
                  }
                : {
                    position: "absolute",
                    top: "-40px",
                    fontSize: "20px",
                    left: "50%",
                    transform: "translate(-50%)",
                    color: "black",
                  }
            }
          >
            Contact Form
          </Typography>

          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xeqpnbyy"
            method="POST"
            className={classes.form}
          >
            <OutlinedInput
              placeholder="Email"
              fullWidth
              type="Email"
              name="Email"
              className={classes.input}
            />

            <OutlinedInput
              type="text"
              fullWidth
              placeholder="Name"
              name="Name"
              className={classes.input}
            />

            <TextField
              placeholder="Message..."
              className={classes.input}
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              type="text"
              name="Message"
            />
            {status === "SUCCESS" ? (
              <Typography
                style={{
                  position: "absolute",

                  left: "50%",
                  transform: "translate(-50%)",
                }}
              >
                Thanks!
              </Typography>
            ) : (
              <Button
                style={
                  darkState
                    ? {
                        position: "absolute",

                        fontSize: "20px",
                        left: "50%",
                        transform: "translate(-50%)",
                        color: "white",
                      }
                    : {
                        position: "absolute",

                        fontSize: "20px",
                        left: "50%",
                        transform: "translate(-50%)",
                        color: "black",
                      }
                }
                type="submit"
              >
                Submit
              </Button>
            )}
            {status === "ERROR" && (
              <p
                style={{
                  position: "absolute",
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
