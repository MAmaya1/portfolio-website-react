import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styles

const MainNav = styled.div`
    background: rgba(31, 41, 58, 0.9);
    height: 60px;
`

const NavBar = props => {
    return (
        <MainNav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/portfolio'>My Work</NavLink>
            <NavLink to='/about-me'>About Me</NavLink>
            <NavLink to='/contact-me'>Contact</NavLink>
        </MainNav>
    )
}

export default NavBar;