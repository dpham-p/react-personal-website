import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>
        <NavLink to='#home'>DP</NavLink>
      </h1>
      <ul className='nav-links'>
        <li>
          <NavLink to='#projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='#about'>About</NavLink>
        </li>
        <li>
          <NavLink to='#contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
