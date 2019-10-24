import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1 className='logo'>
          <a href='#top'>DP</a>
        </h1>
        <ul className='nav-links'>
          <li>
            <a href='#work'>Work</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
