import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import ghfStyle from '../../../styles/Githubfinder.module.css';

const Navbar = ({ icon, title }) => {
  let { url } = useRouteMatch();

  return (
    <nav className={`${ghfStyle.navbar} ${ghfStyle['bg-primary']}`}>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to={url}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
