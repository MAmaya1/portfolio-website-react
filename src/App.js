import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ReactGa from 'react-ga';

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

  useEffect(() => {
    // Configure Google Analytics
    ReactGa.initialize(`${process.env.REACT_APP_TRACKING_ID}`);
    // Report Page View
    ReactGa.pageview(window.location.pathname + window.location.searchS)
  }, []);

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
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/portfolio' component={PortfolioPage}/>
          <Route path='/about-me' component={AboutMePage}/>
          <Route path='/contact-me' component={ContactMePage}/>
          <Route component={HomePage}/>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
