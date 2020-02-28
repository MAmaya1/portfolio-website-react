import React from 'react';
import styled from 'styled-components';

// Import Footer

import Footer from './Footer';

// Import Images

import portrait from '../images/portrait.jpg'

// Styles

const PageWrapper = styled.div`
    padding: 1.5rem 4rem 1.5rem 4rem;
    min-height: calc(100vh - 120px);

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
        color: #CC5418
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

const AboutInfo = styled.div`
    display: grid;
    grid-template-areas:
        "bio-pic bio bio"
        "box1 box2 box3";
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    line-height: 1.5;

    .box1 {
        grid-area: box1;
    }

    .box2 {
        grid-area: box2;
    }

    .box3 {
        grid-area: box3;
    }


    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "bio-pic"
            "bio"
            "box1"
            "box2"
            "box3"
    }
`

const BioPic = styled.img`
    grid-area: bio-pic;
    border: 4px solid #CC5418;
    border-radius: 50%;
    margin: auto;

    @media (max-width: 390px) {
        width: 100%;
    }
`

const Bio = styled.div`
    grid-area: bio;
    font-size: 1.5rem;

    h3 {
        font-weight: 500;
        color: #CC5418;
    }

    p {
        margin: 1rem 0 1rem 0;
    }
`

const InfoBox = styled.div`
    background: #1F293A;
    max-width: 250rem;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-bottom: 5px solid #CC5418;

    h3 {
        font-weight: 400;
        margin-bottom: 1rem;
    }
`

const AboutMePage = props => {
    return (
        <>
            <PageWrapper>
                <LargeHeading>About <span>Me</span></LargeHeading>
                <SmallHeading>Let me tell you a few things...</SmallHeading>
                <AboutInfo>
                    <BioPic src={portrait} alt="Mario Amaya, React Developer" className="bio-pic"/>
                    <Bio>
                        <h3>BIO</h3>
                        <p>I am a React.js developer based in San Diego, and I have several years of experience as a highly-qualified project manager and customer service professional in the fields of multimedia and technology.</p>
                    </Bio>
                    <InfoBox className="box1">
                        <h3>Technical Skills</h3>
                        <p>React, Redux, React Native, React Hooks, React Styled Components, React Testing Library, Axios, NodeJS, Express, Knex, Jest, LESS/SASS</p>
                    </InfoBox>
                    <InfoBox className="box2">
                        <h3>Professional Skills</h3>
                        <p>Project Management, Leadership, Problem Solving, Employee Training, Task Delegation, Product Presentation, Time Management</p>
                    </InfoBox>
                    <InfoBox className="box3">
                        <h3>Personal Interests</h3>
                        <p>Local Urban Planning, Community Activism, Architectural Design, Model Building, Writing, Animation, Film Production, and Travel.</p>
                    </InfoBox>
                </AboutInfo>
            </PageWrapper>
            <Footer />
        </>
    )
}

export default AboutMePage;