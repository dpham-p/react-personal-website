import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <header>
      <div className='navbar bg-primary'>
        <h1 className='logo'>
          <NavLink smooth to='#home'>
            DP
          </NavLink>
        </h1>
        <ul className='nav-links'>
          <li>
            <NavLink smooth to='#projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink smooth to='#about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink smooth to='#contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
