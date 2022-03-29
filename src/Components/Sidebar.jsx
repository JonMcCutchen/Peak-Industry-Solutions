import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen({isOpen: false})
    }
    return (
        <Menu right isOpen={isOpen}>
            <Link to='/jobs' onClick={handleClick}>Jobs</Link>
            <Link to='/about-us' onClick={handleClick}>About Us</Link> 
            <Link to='/faq' onClick={handleClick}>FAQ</Link>
            {!props.isLoggedIn && <Link to='/login' onClick={handleClick}>Login</Link>}
            {props.isLoggedIn && props.isAdmin ? <Link to='/adminProfile' onClick={handleClick}>Admin Profile</Link> : props.isLoggedIn ? <Link to='/profile'>Profile</Link> : ""}
        </Menu>
    )
}

export default Sidebar;