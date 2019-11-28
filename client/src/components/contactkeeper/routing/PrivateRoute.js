import React, { useContext } from 'react';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import AuthContext from '../../../context/contactkeeper/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { url } = useRouteMatch();

  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to={`${url}/login`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
