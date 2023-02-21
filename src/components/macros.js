import React from "react";
import "../styles/App.css"

export class Macros extends React.Component{

    render() {
        return (
            <form>
            <h1>Macronutrient Calculator</h1>
    
            <div className="form">
              <input type="number" 
              className="form-control" 
              placeholder="       Enter height in CM"/>
            </div>
    
            <div className="form">
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Weight in LBS"/>
            </div>

            <div className="form">
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Age in years"/>
            </div>

            <div className="form">
              <input type="text" 
              className="form-control" 
              placeholder="       Enter 'Male' or 'Female'"/>
            </div>

            <div className="form">
              <input type="number" 
              className="form-control" 
              placeholder="       1 being inactive  - 5 very active "/>
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

export default Macros;