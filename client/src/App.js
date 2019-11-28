import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Navbar from './components/main/layout/Navbar';

import Home from './components/main/pages/Home';
import Githubfinder from './Githubfinder';
import Contactkeeper from './Contactkeeper';
import NotFound from './components/main/pages/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/githubfinder' component={Githubfinder} />
          <Route path='/contactkeeper' component={Contactkeeper} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
