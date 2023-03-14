import React, { Component } from 'react'
import "../styles/App.css"

export class Login extends Component {
  //variables for input to be saved into
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    //initialize handlesubmit method
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    //saving variables entered into local variables
    const { email, password } = this.state;
    console.log( email, password);

    //using fetch get the /register api from the server and post the variables in json format
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //verify in console
        console.log(data, "userLogin");

        if(data.status === "ok"){
          alert("Log In Successful");
          //store locally so can be used in other files
          window.localStorage.setItem("token", data.data);
          window.location.href="./";
        }
        else{
          alert("Invalid user. Please try again.");
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Log In</h1>

        <div className="form">
          <input type="email" 
          className="form-control" 
          placeholder="       Enter email"
          //stores the input to variable
          onChange={(e)=>this.setState({email:e.target.value})}/>
        </div>

        <div className="form">
          <input type="password" 
          className="form-control" 
          placeholder="       Enter password"
          onChange={(e)=>this.setState({password:e.target.value})}/>
        </div>

        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
        <p>
          Not a member? <a href="/signup">Sign up!</a>
        </p>
      </form>
    )
  }
}