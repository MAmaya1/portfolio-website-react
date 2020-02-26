import React from 'react';
import styled from 'styled-components';

// Styles

const PageWrapper = styled.div`
    margin-top: 12.5rem;
    padding: 0 4rem 0 4rem;
`

const LargeHeading = styled.h1`
    font-size: 6rem;
    font-weight: 400;
    color: #FFF;
    padding-bottom: 0.5rem;

    span {
        color: #CC5418
    }
`

const SmallHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFF;
    background: #1F293a;
    padding: 0.4rem;
`

const Icons = styled.div`
    padding: 1.8rem 0 1.8rem 0.4rem;

    a {
        padding: 0.2rem;
        margin-right: 1.8rem;
    }
`

const HomePage = props => {
    return (
        <PageWrapper>
            <LargeHeading>Mario <span>Amaya</span></LargeHeading>
            <SmallHeading>React Developer</SmallHeading>
            <Icons>
                <a href="https://www.linkedin.com/in/marioamayaweb" target="_blank"><i className="fab fa-linkedin fa-2x" /></a>
                <a href="https://www.github.com/mamaya1" target="_blank"><i className="fab fa-github fa-2x" /></a>
                <a><i class="far fa-envelope fa-2x" /></a>
            </Icons>
        </PageWrapper>
    )
}

export default HomePage;