import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

// Import Styles

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={HomePage}/>
      </div>
    </Router>
  );
}

export default App;
