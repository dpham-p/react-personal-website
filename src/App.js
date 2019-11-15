import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import FullPageScroll from './utilities/FullPageScroll';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
      </div>
    </Router>
  );
};

export default App;
