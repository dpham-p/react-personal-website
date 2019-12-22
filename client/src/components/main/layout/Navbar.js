import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../../img/Logo-NoBackground.png';
import Media from 'react-media';
import Hamburger from '../../../icons/Hamburger';
import Close from '../../../icons/Close';

const Navbar = props => {
  const clientHeight = document.documentElement.clientHeight;
  const aboutTop = Math.floor(clientHeight * 0.925);
  const projectsTop = Math.floor(clientHeight * 0.925 * 2);
  const experienceTop = Math.floor(clientHeight * 0.925 * 3);
  const contactTop = Math.floor(clientHeight * 0.925 * 4);

  //let lastScrollTop = window.pageYOffset;
  let currentScrollTop = window.pageYOffset;

  const handleScroll = e => {
    currentScrollTop = document.documentElement.scrollTop;
    // console.log(currentScrollTop);
    // if (lastScrollTop > currentScrollTop) {
    //   console.log('scrolling up');
    // } else {
    //   console.log('scrolling down');
    // }
    let mainActive = currentScrollTop < aboutTop;
    let aboutActive =
      currentScrollTop >= aboutTop && currentScrollTop < projectsTop;
    let projectsActive =
      currentScrollTop >= projectsTop && currentScrollTop < experienceTop;
    let experienceActive =
      currentScrollTop >= experienceTop && currentScrollTop < contactTop;
    let contactActive = currentScrollTop >= contactTop;

    if (mainActive) {
      setActiveLink('');
    }
    if (aboutActive) {
      setActiveLink('about');
    }
    if (projectsActive) {
      setActiveLink('projects');
    }
    if (experienceActive) {
      setActiveLink('experience');
    }
    if (contactActive) {
      setActiveLink('contact');
    }

    //lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };
  window.addEventListener('scroll', handleScroll);

  const [hamburger, setHamburger] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState();

  const projectLinks = (
    <div
      className='project-links'
      style={
        dropdown
          ? mobileNav
            ? { height: '13.175rem' }
            : { display: 'block' }
          : mobileNav
          ? { height: 0 }
          : { display: 'none' }
      }
      onMouseLeave={() => setDropdown(false)}
    >
      <Link to='/contactkeeper'>Contact Keeper</Link>

      <Link to='/githubfinder'>GitHub Finder</Link>

      <Link to='/jscalculator'>JS Calculator</Link>
    </div>
  );

  return (
    <Fragment>
      <div className={`navbar ${mobileNav ? 'mobile' : ''}`}>
        <h1 className='logo'>
          <HashLink smooth to='#main' onClick={() => setHamburger(true)}>
            <img src={Logo} alt='logo' />
          </HashLink>
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
                      }}
                    />
                  ) : (
                    <Close
                      width='35'
                      height='35'
                      className='close'
                      onClick={() => {
                        setHamburger(true);
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
        <div
          className={
            mobileNav
              ? `nav-links nav-mobile ${
                  hamburger ? 'nav-closed' : 'nav-opened'
                }`
              : 'nav-links'
          }
        >
          <HashLink
            smooth
            to='#about'
            className={activeLink === 'about' ? 'selectedLink' : null}
            onClick={() => setHamburger(true)}
          >
            About Me
          </HashLink>
          <div
            className='projects-dropdown'
            style={
              mobileNav
                ? dropdown
                  ? { height: '17.5rem' }
                  : { height: '4.375rem' }
                : null
            }
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            onDoubleClick={() => setDropdown(!dropdown)}
          >
            <HashLink
              smooth
              to='#projects'
              className={activeLink === 'projects' ? 'selectedLink' : null}
            >
              Projects <i className='fa fa-caret-down' />
            </HashLink>
            {projectLinks}
          </div>
          <HashLink
            smooth
            to='#experience'
            className={activeLink === 'experience' ? 'selectedLink' : null}
            onClick={() => setHamburger(true)}
          >
            Experience
          </HashLink>
          <HashLink
            smooth
            to='#contact'
            className={activeLink === 'contact' ? 'selectedLink' : null}
            onClick={() => {
              setHamburger(true);
            }}
          >
            Contact
          </HashLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
