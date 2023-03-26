import React from "react";
import "../styles/App.css"
import muscles from '../images/muscles.jpg';
import workout from '../images/workout.jpg'

export class Workouts extends React.Component{

    render() {
        return (
            
                <body>
                    <div class="img1">
                        <img width={300} src={muscles} alt="Muscular anatomy chart"/>
                    </div>
                    
                    <div class="img2">
                        <img width={300} src={workout} alt="Exercise and muscle guide" />
                    </div>
                    <div class="workouts">
                        <h1>Upper Body</h1>
                        <h1>Lower Body</h1>
                        <h1>Core</h1>
                    </div>
                </body>
        )
    }


}
export default Workouts;