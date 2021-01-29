import { Button, Typography } from "@material-ui/core";
import React from "react"

//email form for my contact

export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
          <div id = "Contact" style = {{height: "360px", width: "460px",  position: "absolute", left: "50%", transform: "translate(-50%)"}}>
              <Typography style = {{position: "absolute", top: "-40px", fontSize: "20px", left: "50%", transform: "translate(-50%)"}}>Contact Form</Typography>
        
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xeqpnbyy"
          method="POST"
        > 
          
          <input placeholder = "Email" style = {{margin: "10px", height: "25px", width: "200px", borderRadius: "5px", outline: "none"}} type="Email" name="Email" />
          
          <input type="text" placeholder = "Name" name="Name" style = {{margin: "10px", height: "25px", width: "200px", borderRadius: "5px", outline: "none"}}/>

          <textarea type="text"  name="Message" style = {{ margin: "10px", height: "200px", width: "430px", borderRadius: "5px", outline: "none", resize: "none"}}/>
          {status === "SUCCESS" ? <Typography style = {{ position: "absolute", bottom: "20px", left: "50%", transform: "translate(-50%)"}}>Thanks!</Typography>  : <Button style = {{ position: "relative", top: "20px", left: "50%", transform: "translate(-50%)"}} type = "submit" >Submit</Button>}
          {status === "ERROR" && <p style = {{ position: "absolute", bottom: "-5px", left: "50%", transform: "translate(-50%)", color: "red"}}>Ooops! There was an error.</p>}
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


