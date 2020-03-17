import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styles

const MainNav = styled.div`
    background: #1F293A;
    height: 60px;
    width: 100%;
    padding: 0 4rem;
    position: fixed;

    i {
        display: none;
        line-height: 60px;
        position: absolute;
        padding: 0 4rem;
        right: 0;

        &:hover {
            color: #CC5418;
        }

        @media (max-width: 768px) {
            display: inline-block;
        }
    }

    .close-btn {
        font-size: 2.4rem;
        margin-right: 2px;
    }
`

// const HomeNav = styled.div`
//     background: transparent;
//     height: 60px;
//     padding: 0 4rem;
// `

const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
    line-height: 60px;
    font-weight: 500;

    @media (max-width: 768px) {
        display: none;
    }

    a {
        width: 100px;
        text-align: center;
    }

    .active {
        background: #CC5418;

        &:hover {
            color: #1F293A;
        }
    }
`

// NavBar Component

const NavBar = props => {
    return (
        <MainNav>
            {props.menuOpen ? (
                <i className="fas fa-times fa-2x close-btn" onClick={() => props.toggleMenu(false)}/>
            ) : <i className="fas fa-bars fa-2x" onClick={() => props.toggleMenu(true)}/>}
            <Links>
                <NavLink exact to='/'>HOME</NavLink>
                <NavLink to='/portfolio'>MY WORK</NavLink>
                <NavLink to='/about-me'>ABOUT ME</NavLink>
                <NavLink to='/contact-me'>CONTACT</NavLink>
            </Links>
        </MainNav>
    )
}

export default NavBar;