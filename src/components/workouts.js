import React from "react";
import "../styles/App.css"
import muscles from '../images/muscles.jpg';
import workout from '../images/workout.jpg'

export class Workouts extends React.Component{

    render() {
        return (
            
            
                 
            <body>

                <header>
                    {/* Link to appropriate workouts */}
                    <section>
                        <nav>
                            <ul>
                            <li><a href="#">Upper Body</a></li>
                            <li><a href="#">Lower Body</a></li>
                            <li><a href="#">Core</a></li>
                            </ul>
                        </nav>
                    </section>

                </header>
                
                <h3>Developer note(Hide sections on category click)</h3>
                <section class="hidden">
                    <h1>List of workouts that target the upper body.</h1> 
                    <br/>
                    <p>The upper body consists of chest, back, shoulders, biceps and triceps.
                        The vast majority of upper body exercises will fall into one of the following six categories:
                        <br/>
                        <br/>
                        <ol>
                            <li><h3>Horizontal Pushing</h3></li><p>A horizontal pushing exercise is any movement in which the weight is being pushed out in front of you so that it’s traveling away from your torso in a horizontal plane. Most chest exercises fit into this category. For example:</p>

                                {/* Exercises block */}
                                <ul>
                                    <li>Bench Press</li>
                                    <li>Incline Bench Press</li>
                                    <li>Decline Bench Press</li>
                                    <li>Flat/Incline/Decline Chest Press Machine</li>
                                    <li>Pushups</li>
                                    <li>Dumbbell/Cable/Machine Flyes</li>


                                </ul>
                                
                                <br/>
                            <li><h3>Horizontal Pulling</h3></li><p>A horizontal pulling exercise is any movement in which the weight is being pulled in towards your torso from out in front of you in a horizontal plane. Most back “rowing” exercises fit into this category. For example:</p>
                                <ul>
                                    <li>Bent Over Barbell Rows</li>
                                    <li>Bent Over Dumbbell Rows</li>
                                    <li>Seated Cable Rows</li>
                                    <li>T-Bar Rows</li>
                                    <li>Chest Supported Rows</li>
                                    <li>Inverted Rows</li>
                                    <li>Various Machine Rows</li>
                                    <li>Various Rear Delt Exercises</li>
                                </ul>
                                
                                <br/>
                            <li><h3>Vertical Pushing</h3></li><p>A vertical pushing exercise is any movement in which the weight is being pushed upwards in relation to your torso in a vertical plane. Most shoulder exercises fit into this category. For example:</p>
                                <ul>
                                    <li>Barbell Shoulder Press</li>
                                    <li>Dumbbell Shoulder Press</li>
                                    <li>Machine Shoulder Press</li>
                                    <li>Lateral Raises</li>
                                    <li>Front Raises</li>
                                    
                                </ul>
                                
                                <br/>
                            <li><h3>Vertical Pulling</h3></li><p>A vertical pulling exercise is any movement in which the weight is being pulled down towards your torso in a vertical plane. Most back “pull-up/pull-down” exercises fit into this category. For example:</p>
                                <ul>
                                    <li>Pull-Ups</li>
                                    <li>Chin-Ups</li>
                                    <li>Lat Pull-Downs</li>
                                    
                                </ul>
                                
                                <br/>
                            <li><h3>Elbow Flexion</h3></li><p>An elbow flexion exercise is any movement in which the weight is being pulled towards your torso strictly as a result of flexing at the elbow. Most biceps curling exercises fit into this category. For example:</p>
                                <ul>
                                    <li>Barbell Curls</li>
                                    <li>Dumbbell Curls</li>
                                    <li>Cable Curls</li>
                                    <li>Preacher Curls</li>
                                    <li>Hammer Curls</li>
                    
                                </ul>
                                
                                <br/>
                            <li><h3>Elbow Extension</h3></li><p>An elbow extension exercise is any movement in which the weight is being moved away from your torso strictly as a result of extending at the elbow. Most triceps extension exercises fit into this category. For example:</p>
                                <ul>
                                    <li>Tricep Pushdowns</li>
                                    <li>Overhead Dumbbell Extensions</li>
                                    <li>Skull Crushers</li>
                                    <li>Tricep Kickbacks</li>
                                    
                                </ul>
                                
                                <br/>
                        </ol>
                        </p>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    
                </section>

                <section class="hidden">
                    <h1>List of workouts that target the lower body.</h1>
                    <ul>
                        <li>exercise one</li>
                        <li>exercise two</li>
                        <li>exercise three</li>
                    </ul>
                </section>

                <section>
                    <h1>List of workouts that target the core.</h1>
                    <ul>
                        <li>exercise one</li>
                        <li>exercise two</li>
                        <li>exercise three</li>
                    </ul>
                </section>


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