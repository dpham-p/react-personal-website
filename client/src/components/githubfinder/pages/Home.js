import React, { Fragment, useEffect } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => {
  useEffect(() => {
    document.title = 'GitHubFinder - Home';
  });

  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
