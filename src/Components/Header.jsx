import React from 'react';
import {
    Link
  } from "react-router-dom";
import logo from "../assets/images/peak industry solutions.jpg";
function Header() {
    return(
        <div>
            <header className="header">
                <Link to="/"><img className="logo" src={logo} alt="company logo"/></Link>
                <div className="nav">
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/employees'>Employees</Link>
                    <Link to='/employers'>Employers</Link>
                    <Link to='/about-us'>About Us</Link> 
                </div>
            </header>
        </div>
        
    )

}

export default Header;
