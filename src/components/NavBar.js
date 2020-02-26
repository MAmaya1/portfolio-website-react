import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/portfolio'>My Work</NavLink>
            <NavLink to='/about-me'>About Me</NavLink>
            <NavLink to='/contact-me'>Contact</NavLink>
        </div>
    )
}

export default NavBar;