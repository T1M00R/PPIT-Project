import React from "react";
import "../styles/App.css"


export class Level extends React.Component{

    render() {
        return (
            <body>
                <h1>Calisthenics Workouts</h1>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h3>Click on any excersice to view a demonstration!</h3>

                <br></br>

                <div class="category beginner" >
                    <h2>Beginner</h2>
                    <ul className="list">
                        <li><a href="https://www.youtube.com/watch?v=IODxDxX7oi4">Push-ups<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=MuvB_F2ynD4">Squats<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=wrwwXE_x-pQ">Lunges<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=b75M62-tsxw">Plank<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=MKmrqcoCZ-M">Crunches<input type="checkbox" name="agree" value="yes"></input></a></li>
                    </ul>
                </div>
                <div class="category intermediate">
                    <h2>Intermediate</h2>
                    <ul className="list">
                        <li><a href="https://www.youtube.com/watch?v=J0DnG1_S92I">Diamond push-ups<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=A-cFYWvaHr0">Jump squats<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=HBYGeyb4sSM">Bulgarian split squats<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=rCxF2nG9vQ0">Side plank<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=Pr1ieGZ5atk">Hanging leg raises<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=eGo4IYlbE5g">Pull up<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=Qv6j5gZyBQ8&t=60s">L sit<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=kw6TY9kzZ0I">Tucked planche<input type="checkbox" name="agree" value="yes"></input></a></li>
                    </ul>
                </div>
                
                <div class="category advanced">
                    <h2>Advanced</h2>
                    <ul className="list">
                        <li><a href="https://www.youtube.com/watch?v=xp1tgjT_3k0">One-arm push-ups<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=vq5-vdgJc0I">Pistol squats<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=uZWjFe4fufA">Handstand push-ups<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=p7q0UhxPdLY&t=251s">Muscle up<input type="checkbox" name="agree" value="yes"></input></a></li>
                        <li><a href="https://www.youtube.com/watch?v=UZ-1jwG7aQ4">Planche<input type="checkbox" name="agree" value="yes"></input></a></li>
                    </ul>
                </div>
        </body>
        );
    }
}

export default Level;