import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <header>
      <div className='navbar bg-dark-shade'>
        <h1 className='logo'>
          <NavLink smooth to='/#main'>
            DP
          </NavLink>
        </h1>
        <ul className='nav-links'>
          <li>
            <NavLink
              smooth
              exact
              isActive={(match, location) => {
                if (!location) {
                  return false;
                }
                const { hash } = location;
                return hash === '#about';
              }}
              to='#about'
              activeClassName='selectedLink'
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth
              isActive={(match, location) => {
                if (!location) {
                  return false;
                }
                const { hash } = location;
                return hash === '#projects';
              }}
              to='#projects'
              activeClassName='selectedLink'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth
              isActive={(match, location) => {
                if (!location) {
                  return false;
                }
                const { hash } = location;
                return hash === '#experience';
              }}
              to='#experience'
              activeClassName='selectedLink'
            >
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink
              smooth
              isActive={(match, location) => {
                if (!location) {
                  return false;
                }
                const { hash } = location;
                return hash === '#contact';
              }}
              to='#contact'
              activeClassName='selectedLink'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
