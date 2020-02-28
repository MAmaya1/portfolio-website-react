import React from 'react';
import styled from 'styled-components';

// Styles

const PageWrapper = styled.div`;
    padding: 17.5rem 4rem 4rem 4rem;

    @media (max-width: 768px) {
        text-align: center;
    }

    @media (max-width: 500px) {
        padding-top: 10rem;
    }
`

const LargeHeading = styled.h1`
    font-size: 6rem;
    font-weight: 400;
    line-height: 1;
    padding-bottom: 1.5rem;

    span {
        color: #CC5418;
    }

    @media (max-width: 768px) {
        font-size: 5rem;
    }

    @media (max-width: 500px) {
        font-size: 4rem;
    }
`

const SmallHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    background: #1F293a;
    padding: 0.4rem;
    margin-top: 0.5rem;
`

const Icons = styled.div`
    padding: 1.8rem 0 1.8rem 0;

    a {
        padding: 0.2rem;
        margin-right: 1.8rem;

        @media (max-width: 768px) {
            margin: 0 0.8rem 0 0.8rem;
        }
    }
`

const HomePage = props => {
    return (
        <PageWrapper>
            <LargeHeading>Mario <span>Amaya</span></LargeHeading>
            <SmallHeading>React Developer</SmallHeading>
            <Icons>
                <a href="https://www.linkedin.com/in/marioamayaweb" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" /></a>
                <a href="https://www.github.com/mamaya1" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x" /></a>
                <a><i class="far fa-envelope fa-2x" /></a>
            </Icons>
        </PageWrapper>
    )
}

export default HomePage;