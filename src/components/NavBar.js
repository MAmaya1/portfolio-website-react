import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <NavLink exact to='/'>Home</NavLink>
            {/* <NavLink>My Work</NavLink>
            <NavLink>My Work</NavLink>
            <NavLink>My Work</NavLink> */}
        </div>
    )
}

export default NavBar;