import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Navbar from './components/githubfinder/layout/Navbar';
import Alert from './components/githubfinder/layout/Alert';
import User from './components/githubfinder/users/User';
import Home from './components/githubfinder/pages/Home';
import About from './components/githubfinder/pages/About';
import NotFound from './components/githubfinder/pages/NotFound';
import GithubState from './context/githubfinder/github/GithubState';
import AlertState from './context/githubfinder/alert/AlertState';

import ghfStyle from './styles/Githubfinder.module.css';

const Githubfinder = () => {
  const { path } = useRouteMatch();

  return (
    <GithubState>
      <AlertState>
        <div className='App'>
          <Navbar title='GitHubFinder' icon='fab fa-github' />
          <div className={ghfStyle.container}>
            <Alert />
            <Switch>
              <Route exact path={path} component={Home} />
              <Route exact path={`${path}/about`} component={About} />
              <Route exact path={`${path}/user/:login`} component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default Githubfinder;
