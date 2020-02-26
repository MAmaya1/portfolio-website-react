import React from 'react';

// Import Footer

import Footer from './Footer';

// Import Images

import portrait from '../images/portrait.jpg'

const AboutMePage = props => {
    return (
        <div>
            <h1>About <span>Me</span></h1>
            <h2>Let me tell you a few things...</h2>
            <div className="about-info">
                <img src={portrait}/>
                <div className="bio">
                    <h3>BIO</h3>
                    <p>I am a React.js developer based in San Diego, and I have several years of experience as a highly-qualified project manager and customer service professional in the fields of multimedia and technology.</p>
                </div>
                <div className="info-box">
                    <h3>Technical Skills</h3>
                    <p>React, Redux, React Native, React Hooks, React Styled Components, React Testing Library, Axios, NodeJS, Express, Knex, Jest, LESS/SASS</p>
                </div>
                <div className="info-box">
                    <h3>Professional Skills</h3>
                    <p>Project Management, Leadership, Problem Solving, Employee Training, Task Delegation, Product Presentation, Time Management</p>
                </div>
                <div className="info-box">
                    <h3>Personal Interests</h3>
                    <p>Local Urban Planning, Community Activism, Architectural Design, Model Building, Writing, Animation, Film Production, and Travel.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMePage;