import React from "react";
import "../styles/App.css"

export class Login extends React.Component{

    render() {
        return (
            <form>
            <h1>Log In!</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="form">
                <input type="email" 
                className="form-control" 
                placeholder="       Enter email"/>
            </div>

            <div className="form">
                <input type="password" 
                className="form-control" 
                placeholder="       Enter password"/>
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

export default Login;