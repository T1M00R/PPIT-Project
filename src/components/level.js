import React from "react";
import "../styles/App.css"
import ProgressBar from "./progressbar";
import Gallery from "./gallery";

export class Level extends React.Component{


    render() {

        return (
            <body>
                <h1>Calisthenics Workouts</h1>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h3>Click on any exercise to view a demonstration!</h3>

                <br></br>

                <div class="categories">
                    <div class="category beginner" >
                        <h2>Beginner</h2>
                        <ul class="list">
                            <li><a href="https://www.youtube.com/watch?v=IODxDxX7oi4">Push-ups</a></li>
                            <li><a href="https://www.youtube.com/watch?v=MuvB_F2ynD4">Squats</a></li>
                            <li><a href="https://www.youtube.com/watch?v=wrwwXE_x-pQ">Lunges</a></li>
                            <li><a href="https://www.youtube.com/watch?v=b75M62-tsxw">Plank</a></li>
                            <li><a href="https://www.youtube.com/watch?v=MKmrqcoCZ-M">Crunches</a></li>
                        </ul>
                        {/* Fitness level progress bar*/}
                    <div className="progress-bar">
                        {/* Set value to update fitness level to database */}
                        <ProgressBar  />    
                    </div> 
                    </div>
                    <div class="category intermediate">
                        <h2>Intermediate</h2>
                        <ul class="list">
                            <li><a href="https://www.youtube.com/watch?v=J0DnG1_S92I">Diamond push-ups</a></li>
                            <li><a href="https://www.youtube.com/watch?v=A-cFYWvaHr0">Jump squats</a></li>
                            <li><a href="https://www.youtube.com/watch?v=HBYGeyb4sSM">Bulgarian split squats</a></li>
                            <li><a href="https://www.youtube.com/watch?v=rCxF2nG9vQ0">Side plank</a></li>
                            <li><a href="https://www.youtube.com/watch?v=Pr1ieGZ5atk">Hanging leg raises</a></li>
                            <li><a href="https://www.youtube.com/watch?v=eGo4IYlbE5g">Pull up</a></li>
                            <li><a href="https://www.youtube.com/watch?v=Qv6j5gZyBQ8&t=60s">L sit</a></li>
                            <li><a href="https://www.youtube.com/watch?v=kw6TY9kzZ0I">Tucked planche</a></li>
                        </ul>
                        {/* Fitness level progress bar*/}
                    <div className="progress-bar">
                        <ProgressBar  />
                    </div> 
                    </div>
                    
                    <div class="category advanced">
                        <h2>Advanced</h2>
                        <ul class="list">
                            <li><a href="https://www.youtube.com/watch?v=xp1tgjT_3k0">One-arm push-ups</a></li>
                            <li><a href="https://www.youtube.com/watch?v=vq5-vdgJc0I">Pistol squats</a></li>
                            <li><a href="https://www.youtube.com/watch?v=uZWjFe4fufA">Handstand push-ups</a></li>
                            <li><a href="https://www.youtube.com/watch?v=p7q0UhxPdLY&t=251s">Muscle up</a></li>
                            <li><a href="https://www.youtube.com/watch?v=UZ-1jwG7aQ4">Planche</a></li>
                        </ul>
                        {/* Fitness level progress bar*/}
                        <div className="progress-bar">
                            <ProgressBar />
                        </div> 
                    </div>
                        
                    {/* Fitness level Block*/}
                    {/* <FitnessLevel className="fitnessLevel"  /> */}

                </div>
                {/* Images */}
                <div class="gallery">
                    <Gallery />
                
                </div>
                

                
                
        </body>
        );
    }
}

export default Level;