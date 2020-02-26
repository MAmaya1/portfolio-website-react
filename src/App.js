import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import Components

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutMePage from './components/AboutMePage';
import ContactMePage from './components/ContactMePage';

// Styles

const AppWrapper = styled.div`
  background: rgba(31, 41, 58, 0.9);
  height: 100vh;
`

function App() {
  return (
    <Router>
      <AppWrapper>
        <NavBar />
        <Route exact path='/' component={HomePage}/>
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path='/about-me' component={AboutMePage}/>
        <Route path='/contact-me' component={ContactMePage}/>
      </AppWrapper>
    </Router>
  );
}

export default App;
