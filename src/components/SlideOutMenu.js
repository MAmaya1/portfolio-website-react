import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styles

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: 60px;
    text-align: center;
    background: rgba(31, 41, 58, 0.9);
    z-index: 3;

    .open {
        right: 0;
    }

    .closed {
        right: -100vw;
    }

    @media (min-width: 769px) {
        display: none;
    }
`

const Links = styled.ul`
    list-style: none;
    padding: 0;

    li {
        margin-top: 6.5rem;
        font-size: 1.8rem;
        
        @media (max-width: 500px) {
            margin-top: 4rem;
            font-size: 2rem;
        }

        a {
            padding: 5px 10px;
            border-bottom: 4px solid #CC5418;
        }
    }

    .active {
        background: #CC5418;
    }
`

const SlideOutMenu = props => {
    return (
        <Menu className={props.menuOpen ? 'open' : 'closed'}>
            <Links>
                <li><NavLink exact to='/' onClick={() => props.toggleMenu(false)}>HOME</NavLink></li>
                <li><NavLink to='/portfolio' onClick={() => props.toggleMenu(false)}>MY WORK</NavLink></li>
                <li><NavLink to='/about-me' onClick={() => props.toggleMenu(false)}>ABOUT ME</NavLink></li>
                <li><NavLink to='/contact-me' onClick={() => props.toggleMenu(false)}>CONTACT</NavLink></li>
            </Links>
        </Menu>
    )
}

export default SlideOutMenu;