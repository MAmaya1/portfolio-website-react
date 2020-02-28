import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import Components

import NavBar from './components/NavBar';
import SlideOutMenu from './components/SlideOutMenu';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutMePage from './components/AboutMePage';
import ContactMePage from './components/ContactMePage';

// Styles

const AppWrapper = styled.div`
  background: rgba(31, 41, 58, 0.9);
  min-height: 100vh;
`

function App() {

  const [menuOpen, toggleMenu] = useState(false);

  return (
    <Router>
      {menuOpen && 
          <SlideOutMenu 
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
        />}
      <AppWrapper>
        <NavBar
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <Route exact path='/' component={HomePage}/>
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path='/about-me' component={AboutMePage}/>
        <Route path='/contact-me' component={ContactMePage}/>
      </AppWrapper>
    </Router>
  );
}

export default App;
