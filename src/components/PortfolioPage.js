import React from 'react';
import styled from 'styled-components';

// Import Footer

import Footer from './Footer';

// Import Images

import project1 from '../images/projects/project1.png';
import project2 from '../images/projects/project2.jpg';
import project3 from '../images/projects/project3.jpg';
import project4 from '../images/projects/project4.jpg';
import screenshot from '../images/projects/screenshot.png';

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

const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const PortfolioItem = styled.div`
    margin-bottom: 1rem;

    h3 {
        font-weight: 500;
    }

    p {
        height: 7rem;
        padding-top: 1rem;

        @media (max-width: 1360px) {
            height: 9rem;
        }

        @media (max-width: 1024px) {
            height: 8rem;
        }

        @media (max-width: 500px) {
            height: auto;
            padding-bottom: 1.5rem;
            line-height: 1.5;
        }

        a {
            border-bottom: dotted 1px;
        }
    }

    img {
        width: 100%;

        &:hover {
            outline: 4px solid #CC5418;
            padding: 0;
            transition: all 0.2s ease;
        }
    }
`

const Button = styled.a`
    background: #525252;
    display: block;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0 0.5rem 0;

    &:hover {
        background: #CC5418;
        color: #000;
        transition: all 0.4s ease;
    }
`

const PortfolioPage = props => {
    return (
        <>
            <PageWrapper>
                <LargeHeading>My <span>Work</span></LargeHeading>
                <SmallHeading>Check out some of my projects...</SmallHeading>
                <Projects>
                    <PortfolioItem>
                        <h3>Nifty Deals</h3>
                        <p>Nifty Deals is a DTC e-commerce website powered by Shopify designed to give customers a simple, seamless shopping experience.</p>
                        <a href="https://www.niftydeals.store" target="_blank" rel="noopener noreferrer" data-testid="niftyDealsUrl"><img src={project1} alt="Nifty Deals banner"/></a>
                        <Button href="https://www.niftydeals.store" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i> View Site</Button>
                    </PortfolioItem>
                    <PortfolioItem>
                        <h3>Find My Reps</h3>
                        <p>Find My Reps compiles an organized list of your elected officials, and their contact information, simply by entering your address.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.marioamayasd.find_my_reps" target="_blank" rel="noopener noreferrer" data-testid="findMyRepsUrl"><img src={screenshot} alt="Find My Reps banner"/></a>
                        <Button href="https://github.com/MAmaya1/find-my-reps" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View GitHub</Button>
                    </PortfolioItem>
                    {/* <PortfolioItem>
                        <h3>FounderGrants.com</h3>
                        <p>Developed for <a href="https://www.1517fund.com/" target="_blank" rel="noopener noreferrer" data-testid="1517Url">1517 Fund</a>, Founder Grants provides a platform for developers and startups to connect with available grants, and procure project funding.</p>
                        <a href="https://www.foundergrants.com/" target="_blank" rel="noopener noreferrer" data-testid="founderGrantsUrl"><img src={project1} alt="Founder Grants Screenshot"/></a>
                        <Button href="https://github.com/Lambda-School-Labs/startup-grant-database-fe" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View GitHub</Button>
                    </PortfolioItem> */}
                    <PortfolioItem>
                        <h3>IntelliFlight</h3>
                        <p>IntelliFlight is a flight planning app that allows pilots to view and create pilot weather reports (PIREPS) along their route.</p>
                        <a href="https://www.intelliflight.app/" target="_blank" rel="noopener noreferrer" data-testid="intelliFlightUrl"><img src={project2} alt="IntelliFlight Screenshot"/></a>
                        <Button href="https://github.com/labs13-intelliflight" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View GitHub</Button>
                    </PortfolioItem>
                    <PortfolioItem>
                        <h3>Foodie Fun</h3>
                        <p>Foodie Fun lets you rank and review your favorite restaurants, and meals.</p>
                        <a href="https://elated-pasteur-bcba0d.netlify.com/" target="_blank" rel="noopener noreferrer" data-testid="foodieFunUrl"><img src={project3} alt="Foodie Fun Screenshot"/></a>
                        <Button href="https://github.com/bw-foodie-fun/Frontend-Foodie-Fun" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View GitHub</Button>
                    </PortfolioItem>
                    <PortfolioItem>
                        <h3>Yelp Tacopedia</h3>
                        <p>Powered by Yelp and Mota Analytica, Yelp Tacopedia uses sentiment analysis to find you the best tacos in town.</p>
                        <a href="https://yelp-tacopedia.netlify.com/" target="_blank" rel="noopener noreferrer" data-testid="tacopediaUrl"><img src={project4} alt="Yelp Tacopedia Screenshot"/></a>
                        <Button href="https://github.com/yelpfeelers/landing-pages" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View GitHub</Button>
                    </PortfolioItem>
                </Projects>
            </PageWrapper>
            <Footer />
        </>
    )
}

export default PortfolioPage;