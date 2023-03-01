import React from "react";
import "../styles/App.css"
import muscles from '../images/muscles.jpg';
import workout from '../images/workout.jpg'

export class Workouts extends React.Component{

    render() {
        return (
            
                 
            <body>
                    {/* Link to appropriate workouts */}
                    <h1><a href="">Upper Body</a></h1>
                    <h1><a href="">Lower Body</a></h1>
                    <h1><a href="">Core</a></h1>


                    <div class="gallery">
                        <a target="_blank" href="src/images/muscles.jpg">
                        <img src={muscles}  alt="Muscular Anatomy Chart" width="600" height="400"/>
                        </a>
                        <div class="desc">Muscular Anatomy Chart</div>
                    </div>

                    {/* {/* <div class="gallery">
                        <a target="_blank" href="img_forest.jpg">
                        <img src="img_forest.jpg" alt="Forest" width="600" height="400">
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div> */}

                    <div class="gallery">
                        <a target="_blank" href="src/images/workout.jpg">
                        <img src={workout}  alt="Muscular Anatomy Chart" width="600" height="400"/>
                        </a>
                        <div class="desc">Workout Diagram</div>
                    </div> 
            </body>
        
    
          
        );
    }
}

export default Workouts;