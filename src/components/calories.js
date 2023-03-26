import React from "react";
import "../styles/App.css"

export class Calories extends React.Component {

  //variables for input to be saved into
  constructor(props) {
      super(props);
      this.state = {
          height: "",
          weight: "",
          age: "",
          gender: "", 
          activity: "",
      };

      //initialize handlesubmit method
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      //saving variables entered into local variables
      const { height, weight, age, gender, activity } = this.state;
      console.log( height, weight, age, gender, activity);

      //all maths found online in calorie calculators

      if(gender === 'Male'){
          //mens BMR
          var Mgender = 66;
          var Mweight = (6.23 * weight);
          var Mheight = (12.7 * height);
          var Mage = (6.8 * age);

          var BMR = (Mgender + Mweight + Mheight + Mage);

      }
      else if(gender === 'Female'){
          //womans BMR
          Mgender = 665;
          Mweight = (4.35 * weight);
          Mheight = (4.7 * height);
          Mage = (4.7 * age);

          BMR = (Mgender + Mweight + Mheight + Mage);

      }
      else{
          alert("Incorrect input! Please enter 1 for 'Male' or 2 for 'Female'")
      }

      //if statement to take activity level into account
      if(activity === '1'){
          var Mcals = (BMR * 1.2);
          var gainW = (Mcals + 500);
          var loseW = (Mcals - 500);
          alert("Maintenance Calories: " + Math.round(Mcals) + "\nGain Weight: " + Math.round(gainW) + "\nLose Weight: " + Math.round(loseW));

      }
      else if(activity === '2'){
          Mcals = (BMR * 1.375);
          gainW = (Mcals + 500);
          loseW = (Mcals - 500);
          alert("Maintenance Calories: " + Math.round(Mcals) + "\nGain Weight: " + Math.round(gainW) + "\nLose Weight: " + Math.round(loseW));

      }else if(activity === '3'){
          Mcals = (BMR * 1.55);
          gainW = (Mcals + 500);
          loseW = (Mcals - 500);
          alert("Maintenance Calories: " + Math.round(Mcals) + "\nGain Weight: " + Math.round(gainW) + "\nLose Weight: " + Math.round(loseW));

      }else if(activity === '4'){
          Mcals = (BMR * 1.725);
          gainW = (Mcals + 500);
          loseW = (Mcals - 500);
          alert("Maintenance Calories: " + Math.round(Mcals) + "\nGain Weight: " + Math.round(gainW) + "\nLose Weight: " + Math.round(loseW));

      }else if(activity === '5'){
          Mcals = (BMR * 1.9);
          gainW = (Mcals + 500);
          loseW = (Mcals - 500);
          alert("Maintenance Calories: " + Math.round(Mcals) + "\nGain Weight: " + Math.round(gainW) + "\nLose Weight: " + Math.round(loseW));

      }else{
          alert("Invalid Activity Option. please select 1-5.");
      }    
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
          <h1>Calorie Calculator</h1>
  
          <div className="form">
            <input type="number" 
            className="form-control" 
            placeholder="       Enter height in Inches"
            //stores the input to variable
            onChange={(e)=>this.setState({height:e.target.value})}/>
          </div>
  
          <div className="form">
            <input type="number" 
            className="form-control" 
            placeholder="       Enter Weight in LBS"
            onChange={(e)=>this.setState({weight:e.target.value})}/>
          </div>

          <div className="form">
            <input type="number" 
            className="form-control" 
            placeholder="       Enter Age in years"
            onChange={(e)=>this.setState({age:e.target.value})}/>
          </div>

          <div className="form">
            <input type="text" 
            className="form-control" 
            placeholder="       Enter 'Male' or 'Female'"
            onChange={(e)=>this.setState({gender:e.target.value})}/>
          </div>

          <div className="form">
            <input type="number" 
            className="form-control" 
            placeholder="      Enter activity: 1 being inactive  - 5 very active "
            onChange={(e)=>this.setState({activity:e.target.value})}/>
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

export default Calories;