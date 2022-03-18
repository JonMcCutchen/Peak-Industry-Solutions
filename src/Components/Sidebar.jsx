import React from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
    return (
        <Menu right noOverlay>
            <Link to='/jobs'>Jobs</Link>
            <Link to='/employees'>Employees</Link>
            <Link to='/employers'>Employers</Link>
            <Link to='/about-us'>About Us</Link> 
            {!props.isLoggedIn && <Link to='/login'>Login</Link>}
            {props.isLoggedIn && <Link to='/profile'>Profile</Link>}
        </Menu>
    )
}

export default Sidebar;