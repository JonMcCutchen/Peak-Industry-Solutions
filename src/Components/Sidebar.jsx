import React from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
    return (
        <Menu right >
            <Link to='/jobs'>Jobs</Link>
            <Link to='/about-us'>About Us</Link> 
            <Link to='/faq'>FAQ</Link>
            {!props.isLoggedIn && <Link to='/login'>Login</Link>}
            {props.isLoggedIn && props.isAdmin ? <Link to='/adminProfile'>Admin Profile</Link> : props.isLoggedIn ? <Link to='/profile'>Profile</Link> : ""}
        </Menu>
    )
}

export default Sidebar;