import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutMePage from './components/AboutMePage';
import ContactMePage from './components/ContactMePage';
import Footer from './components/Footer';

// Import Styles

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={HomePage}/>
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path='/about-me' component={AboutMePage}/>
        <Route path='/contact-me' component={ContactMePage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
