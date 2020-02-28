import React from 'react';
import styled from 'styled-components';

// Styles

const MainFooter = styled.footer`
    font-size: 1rem;
    background: #1F293A;
    height: 60px;
    width: 100%;
    line-height: 60px;
    bottom: 0;
    padding: 0 4rem 0 4rem;

    span {
        color: #CC5418;
    }

    @media (max-width: 1024px) {
        text-align: center;
    }
`

const Footer = props => {
    return (
        <MainFooter>
            <h5>Mario Amaya | <span>React Developer</span></h5>
        </MainFooter>
    )
}

export default Footer;