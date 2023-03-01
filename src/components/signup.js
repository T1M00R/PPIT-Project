import React from "react";
import "../styles/App.css"
import axios from "axios";

export class Signup extends React.Component{

//variables for input to be saved into
constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };

    // Initialize handleSubmit for form
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //saving variables entered into local variables
    // const { fname, lname, email, password } = this.state;

    const newUser =  this.state;
    console.log(newUser);

    // create post request using axios for signin up a new user
    axios.post('http://localhost:4000/api/signup',newUser)
    .then()
    .catch();


    // .then((res) => res.json())
    //   .then((data) => {
    //     //verify in console
    //     console.log(data, "userRegistered");

    //     if(data.status === "ok"){
    //       alert("Sign up successful");
    //     }
    //     else{
    //       alert("There is already a user with these details. Try logging in.");
    //     }
    //   });
    



    

    // //using fetch get the /register api from the server and post the variables in json format
    // fetch("http://localhost:5000/register", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     fname,
    //     lname,
    //     email,
    //     password,
    //   }),
    // })
      
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>Sign up!</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="form">
                <input type="text" 
                className="form-control" 
                placeholder="       First Name:"
                
                //value={this.state.fname}

                //stores form data to variable
                onChange={(e)=>this.setState({fname:e.target.value})}/>
          
            </div>

            <div className="form">
                <input type="text" 
                className="form-control" 
                placeholder="       Surname: "

                //value={this.state.lname}

                onChange={(e)=>this.setState({lname:e.target.value})}/>
            </div>

            <div className="form">
                <input type="email" 
                className="form-control" 
                placeholder="       Email:"

                //value={this.state.email}

                onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>

            <div className="form">
                <input type="password" 
                className="form-control" 
                placeholder="       Password:"

                //value={this.state.password}

                onChange={(e)=>this.setState({password:e.target.value})}/>
            </div>
    
            <div className="d-grid">
              <button type="submit"  className="button">
                Submit
              </button>
            </div>
          </form>
        );
    }
}

export default Signup;