import React from "react";
import "../styles/App.css"

export class Signup extends React.Component{

    render() {
        return (
            <form>
            <h1>Sign up!</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="form">
                <input type="text" 
                className="form-control" 
                placeholder="       First Name:"/>
            </div>

            <div className="form">
                <input type="text" 
                className="form-control" 
                placeholder="       Surname: "/>
            </div>

            <div className="form">
                <input type="email" 
                className="form-control" 
                placeholder="       Email:"/>
            </div>

            <div className="form">
                <input type="password" 
                className="form-control" 
                placeholder="       Password:"/>
            </div>
    
            <div className="d-grid">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        );
    }
}

export default Signup;