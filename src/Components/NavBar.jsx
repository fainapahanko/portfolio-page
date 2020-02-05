import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navbar-div">
        <div className='nav-section'>
        <Link 
            className="nav-link"    
            to="about-me" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
        >
            About me
        </Link>
        <Link
            className="nav-link" 
            to="portfolio" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
        >
            Portfolio
        </Link>
        <Link 
            className="nav-link" 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
        >
            Contact
        </Link>
        </div>
    </div>
  );
};

export default NavBar;
