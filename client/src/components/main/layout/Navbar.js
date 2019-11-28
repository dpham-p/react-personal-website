import React, { Fragment, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Media from 'react-media';
import Hamburger from '../../../icons/Hamburger';
import Close from '../../../icons/Close';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <Fragment>
      <div
        className={`navbar bg-dark-shade ${
          mobileNav ? 'responsive' : 'd-flex'
        }`}
      >
        <h1 className='logo'>
          <NavLink smooth to='#main'>
            DP
          </NavLink>
          <Media
            queries={{
              small: '(max-width: 599px)',
              medium: '(min-width: 600px) and (max-width: 1199px)',
              large: '(min-width: 1200px)'
            }}
          >
            {matches =>
              !matches.large ? (
                <Fragment>
                  {setMobileNav(true)}
                  {hamburger ? (
                    <Hamburger
                      width='35'
                      height='35'
                      className='hamburger'
                      onClick={() => {
                        setHamburger(false);
                        setMobileNav(true);
                      }}
                    />
                  ) : (
                    <Close
                      width='35'
                      height='35'
                      className='close'
                      onClick={() => {
                        setHamburger(true);
                        setMobileNav(false);
                      }}
                    />
                  )}
                </Fragment>
              ) : (
                <Fragment>{setMobileNav(false)}</Fragment>
              )
            }
          </Media>
        </h1>
        <div className='links-container'>
          <ul
            className={
              mobileNav
                ? `nav-links ${hamburger ? 'nav-closed' : 'nav-opened'}`
                : 'd-flex'
            }
          >
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
      </div>
    </Fragment>
  );
};

export default Navbar;
