import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styles

const MainNav = styled.div`
    background: #1F293A;
    height: 60px;
    padding: 0 4rem;
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

// NavBar Components

const NavBar = props => {
    return (
        <MainNav>
            <Links>
                <NavLink exact to='/'>HOME</NavLink>
                <NavLink to='/portfolio'>MY WORK</NavLink>
                <NavLink to='/about-me'>ABOUT ME</NavLink>
                <NavLink to='/contact-me'>CONTACT</NavLink>
            </Links>
        </MainNav>
    )
}

// Possible transparent NavBar for HomePage

// export const HomeNavBar = props => {
//     return(
//         <HomeNav>
//             <Links>
//                 <NavLink exact to='/'>HOME</NavLink>
//                 <NavLink to='/portfolio'>MY WORK</NavLink>
//                 <NavLink to='/about-me'>ABOUT ME</NavLink>
//                 <NavLink to='/contact-me'>CONTACT</NavLink>
//             </Links>
//         </HomeNav>
//     )
// }

export default NavBar;