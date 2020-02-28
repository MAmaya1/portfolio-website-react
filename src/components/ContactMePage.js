import React from 'react';
import styled from 'styled-components';


// Import Footer

import Footer from './Footer';

// Styles

const PageWrapper = styled.div`
    padding: 5rem 4rem 1.5rem 4rem;
    min-height: calc(100vh - 60px);

    @media (max-width: 768px) {
        text-align: center;
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
    background: #1F293A;
    padding: 0.4rem;
    margin-bottom: 2rem;
`

const ContactIcons = styled.ul`
    list-style: none;
    font-size: 1.8rem;
    padding 1rem;

    @media (max-width: 500px) {
        font-size: 1rem;
        text-align: left;
        padding: 0 0 1rem 0;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        border-bottom: dotted 1px;
    }
`

const ContactMePage = props => {
    return (
        <>
            <PageWrapper>
                <LargeHeading>Contact <span>Me</span></LargeHeading>
                <SmallHeading>This is how you can reach me...</SmallHeading>
                <ContactIcons>
                    <li><i className="far icon-bottom fa-envelope"/> <a>mario.amaya.web<wbr/>@gmail.com</a></li>
                    <li><i className="fas icon-bottom fa-phone"/> (619) 502-0073</li>
                    <li><i className="fab icon-bottom fa-linkedin"/> <a href="https://www.linkedin.com/in/marioamayaweb" target="_blank" rel="noopener noreferrer">marioamayaweb</a></li>
                    <li><i className="fab icon-bottom fa-github"/> <a href="https://github.com/MAmaya1" target="_blank" rel="noopener noreferrer">MAmaya1</a></li>
                </ContactIcons>
            </PageWrapper>
            <Footer />
        </>
    )
}

export default ContactMePage;