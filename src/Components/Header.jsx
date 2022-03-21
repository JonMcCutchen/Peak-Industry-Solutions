import React from 'react';
import { useContext } from 'react';
import UserProfile from './Profile/UserProfile';
import { useNavigate } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import {
    Link
  } from "react-router-dom";
import logo from "../assets/images/peak industry solutions.jpg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import App from '../App';
import Sidebar from "./Sidebar";


function Header(props) {
    let width = window.innerWidth;
    {if(width < 1024) {
        return(
        <div>
            <header className="header">
                <Link to="/"><img className="logo" src={logo} alt="company logo"/></Link>
                <Sidebar/>
            </header>
        </div>
        )
    }else {
        return(
        <div>
            <header className="header">
                <Link to="/"><img className="logo" src={logo} alt="company logo"/></Link>
                <div className="nav">
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/employers'>Employers</Link>
                    <Link to='/about-us'>About Us</Link> 
                    {!props.isLoggedIn && <Link to='/login'>Login</Link>}
                    {props.isLoggedIn && <Link to='/profile'>Profile</Link>}
                </div>
            </header>
        </div>
        )
    }}
}

export default Header;
