import React from 'react';

// Import Footer

import Footer from './Footer';

const ContactMePage = props => {
    return (
        <div>
            <h1>Contact <span>Me</span></h1>
            <h2>This is how you can reach me...</h2>
            <ul className='contact-icons'>
                <li><i className="far icon-bottom fa-envelope"/><a>mario.amaya.web@gmail.com</a></li>
                <li><i className="fas icon-bottom fa-phone"/>(619) 502-0073</li>
                <li><i className="fab icon-bottom fa-linkedin"/><a href="https://www.linkedin.com/in/marioamayaweb" target="_blank">marioamayaweb</a></li>
                <li><i className="fab icon-bottom fa-github"/><a href="https://github.com/MAmaya1" target="_blank">MAmaya1</a></li>
            </ul>
            <Footer />
        </div>
    )
}

export default ContactMePage;