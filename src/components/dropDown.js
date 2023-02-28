import React from "react";
import "../styles/App.css";

const DropDown = ()=>{
    return(
        //list for drop down box
        <div className="dropDown">
            <ul className="list">
                <li><a href="/login">Log in</a></li>
                <hr></hr>
                <li><a href="/signup">Sign up</a></li>
                <hr></hr>
            </ul>
        </div>
    )
}

export default DropDown