import { useRef } from "react";
//menu and close menu icons
import {FaBars, FaTimes, FaUserCircle} from "react-icons/fa";
import "../styles/App.css"

function Navbar(){
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

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
            <button className="userIcon">
                    <FaUserCircle/>
                </button>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;