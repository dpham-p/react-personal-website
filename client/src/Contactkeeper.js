import React, { Fragment } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import Navbar from './components/contactkeeper/layouts/Navbar';
import Home from './components/contactkeeper/pages/Home';
import About from './components/contactkeeper/pages/About';
import Register from './components/contactkeeper/auth/Register';
import Login from './components/contactkeeper/auth/Login';
import Alerts from './components/contactkeeper/layouts/Alerts';
import PrivateRoute from './components/contactkeeper/routing/PrivateRoute';

import ContactState from './context/contactkeeper/contact/ContactState';
import AuthState from './context/contactkeeper/auth/AuthState';
import AlertState from './context/contactkeeper/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Contactkeeper = () => {
  let { path } = useRouteMatch();

  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <PrivateRoute exact path={path} component={Home} />
                <Route exact path={`${path}/about`} component={About} />
                <Route exact path={`${path}/register`} component={Register} />
                <Route exact path={`${path}/login`} component={Login} />
              </Switch>
            </div>
          </Fragment>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default Contactkeeper;
