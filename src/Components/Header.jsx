import React from 'react';
import { useContext } from 'react';
import UserProfile from './Profile/UserProfile';
import AuthContext from './store/authContext';
import { Navigate } from 'react-router-dom';
import AuthPage from './auth/AuthPage';


import {
    Link
  } from "react-router-dom";
import logo from "../assets/images/peak industry solutions.jpg";
function Header() {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

    return(
        <div>
            <header className="header">
                <Link to="/"><img className="logo" src={logo} alt="company logo"/></Link>
                <div className="nav">
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/employees'>Employees</Link>
                    <Link to='/employers'>Employers</Link>
                    <Link to='/aboutUs'>About Us</Link> 
                    {!authCtx.isLoggedIn && <Link to='/login'>Login</Link>}
                    {authCtx.isLoggedIn && <Link to='/profile'>Profile</Link>}
                    
                </div>
            </header>
        </div>
        
    )

}

export default Header;
