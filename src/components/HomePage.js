import React from 'react';

const HomePage = props => {
    return (
        <div>
            <h1>Mario <span>Amaya</span></h1>
            <h2>React Developer</h2>
            <div className="web-icons">
                <a href="https://www.linkedin.com/in/marioamayaweb" target="_blank"><i className="fab fa-linkedin fa-2x" /></a>
                <a href="https://www.github.com/mamaya1" target="_blank"><i className="fab fa-github fa-2x" /></a>
                <a><i class="far fa-envelope fa-2x" /></a>
            </div>
        </div>
    )
}

export default HomePage;