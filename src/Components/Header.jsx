import React from 'react';
import { useContext } from 'react';
import UserProfile from './Profile/UserProfile';
import { useNavigate } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import {
    Link
  } from "react-router-dom";
import logo from "../assets/images/Peak-Industry-Solutions-Logo-cropped.svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import App from '../App';
import Sidebar from "./Sidebar";


function Header({isLoggedIn, isAdmin}) {
    let width = window.innerWidth;
    {if(width < 1024) {
        return(
        <div>
            <header className="header">
                <Link to="/"><img className="logo" src={logo} alt="company logo"/></Link>
                <Sidebar  isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
            </header>
        </div>
        )
    }else {
        return(
        <div>
            <header className="header">
                {/* <img className="logo" src={logo} alt="company logo"/> */}
                <Link to="/"><div className="headerImage"></div></Link>
                <div className="nav">
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/about-us'>About Us</Link> 
                    <Link to='/faq'>FAQ</Link>
                    {!isLoggedIn && <Link to='/login'>Login</Link>}
                    {isLoggedIn && isAdmin ? <Link to='/adminProfile'>Admin Profile</Link> : isLoggedIn ? <Link to='/profile'>Profile</Link> : ""}
                </div>
            </header>
        </div>
        )
    }}
}

export default Header;
