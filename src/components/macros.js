import React from "react";
import "../styles/App.css"

export class Macros extends React.Component{

    render() {
        return (
            <form>
            <h1>Macronutrient Calculator</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="form">
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Calories Needed"/>
            </div>
    
            <div className="form">
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Weight in LBS"/>
            </div>
    
            <div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        );
    }
}

export default Macros;