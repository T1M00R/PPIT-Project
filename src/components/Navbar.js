import { useRef } from "react";
import React, { useState } from 'react';
//menu and close menu icons
import {FaBars, FaTimes, FaUserCircle} from "react-icons/fa";
import "../styles/App.css"
import DropDown from './dropDown';

function Navbar(){
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    //setting the state of drop down box to false
    const[openDropdown, setOpenDropdown] = useState(false);

    return(
        <header>
            <h3>Weights & Plates</h3>
            {/* changing the url with the click of navbar //options */}
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/workouts">Workouts</a>
                <a href="/calories">Calories</a>
                <a href="/macros">Macronutrients</a>
                {/* if the page is too small then a button will appear to see the nav bar */}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                    
                </button>
            </nav>
            {/*button with react icon that shows a drop down box when clicked*/}
            <button className="userIcon" onClick={()=>setOpenDropdown((prev) => (!prev))}>
                    <FaUserCircle/>
                </button>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>

            {/*shows dropdown box variable to set false*/}
            {
                openDropdown && <DropDown/>
            }
        </header>
    );
}

export default Navbar;