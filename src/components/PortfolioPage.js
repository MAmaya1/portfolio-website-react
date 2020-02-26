import React from 'react';

// Import Images

import project1 from '../images/projects/project1.jpg';
import project2 from '../images/projects/project2.jpg';
import project3 from '../images/projects/project3.jpg';
import project4 from '../images/projects/project4.jpg';

const PortfolioPage = props => {
    return (
        <div>
            <h1>My <span>Work</span></h1>
            <h2>Check out some of my work...</h2>
            <div className="projects">
                <div className="portfolio-item">
                    <h3>FounderGrants.com</h3>
                    <p>Developed for <a href="https://www.1517fund.com/" target="_blank">1517 Fund</a>, Founder Grants provides a platform for developers and startups to connect with available grants, and procure project funding.</p>
                    <a href="https://www.foundergrants.com/" target="_blank"><img src={project1}/></a>
                    <a href="https://github.com/Lambda-School-Labs/startup-grant-database-fe" target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="portfolio-item">
                    <h3>IntelliFlight</h3>
                    <p>IntelliFlight is a flight planning app that allows pilots to view and create pilot weather reports (PIREPS) along their route.</p>
                    <a href="https://www.intelliflight.app/" target="_blank"><img src={project2}/></a>
                    <a href="https://github.com/labs13-intelliflight" target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="portfolio-item">
                    <h3>Foodie Fun</h3>
                    <p>Foodie Fun lets you rank and review your favorite restaurants, and meals.</p>
                    <a href="https://elated-pasteur-bcba0d.netlify.com/" target="_blank"><img src={project3}/></a>
                    <a href="https://github.com/bw-foodie-fun/Frontend-Foodie-Fun" target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="portfolio-item">
                    <h3>Yelp Tacopedia</h3>
                    <p>Powered by Yelp and Mota Analytica, Yelp Tacopedia uses sentiment analysis to find you the best tacos in town.</p>
                    <a href="https://yelp-tacopedia.netlify.com/" target="_blank"><img src={project4}/></a>
                    <a href="https://github.com/yelpfeelers/landing-pages" target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;