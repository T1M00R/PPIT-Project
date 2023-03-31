import React, { Component } from 'react'
import { message } from "antd";
import "../styles/App.css"

export class Signup extends Component {
  //variables for input to be saved into
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    //initialize handlesubmit method
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //saving variables entered into local variables
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);

    //using fetch get the /register api from the server and post the variables in json format
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //verify in console
        console.log(data, "userRegistered");

        if(data.status === "ok"){
          message.success('Sign up Successfull!');
        }
        else{
          message.warning("There is already a user with these details. Try logging in.");
        }
      });
  }

  render() {
    return (
      //handleSubmit method on button
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <div className="form">
          <input type="text" 
          className="form-control" 
          placeholder="     First name" 
          //stores the input to variable
          onChange={(e)=>this.setState({fname:e.target.value})}/>
        </div>

        <div className="form">
          <input type="text" 
          className="form-control" 
          placeholder="     Last name" 
          onChange={(e)=>this.setState({lname:e.target.value})}/>
        </div>

        <div className="form">
          <input type="email" 
          className="form-control" 
          placeholder="     Enter email" 
          onChange={(e)=>this.setState({email:e.target.value})}/>
        </div>

        <div className="form">
          <input type="password" 
          className="form-control" 
          placeholder="     Enter password" 
          onChange={(e)=>this.setState({password:e.target.value})}/>
        </div>

        <div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </div>
        <p>
          Already registered <a href="/login">Log in?</a>
        </p>
      </form>
    )
  }
}