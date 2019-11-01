import React from 'react';
import EmailIcon from '../../icons/Envelope';
import GitHubIcon from '../../icons/GithubLogo';
import LinkedInIcon from '../../icons/LinkedinLogo';
import FacebookIcon from '../../icons/FacebookLogo';
import InstagramIcon from '../../icons/InstagramLogo';

const ContactSection = (
  <div className='contactInfo'>
    <h1>LET'S GET IN TOUCH!</h1>
    <div className='social'>
      <ul>
        <li>
          <a href='mailto:donald@huskers.unl.edu'>
            <EmailIcon width='35px' height='35px' />
          </a>
        </li>
        <li>
          <a href='https://github.com/dpham-p'>
            <GitHubIcon width='35px' height='35px' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/donald-pham-bb206658/'>
            <LinkedInIcon width='35px' height='35px' />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/donaldpham'>
            <FacebookIcon width='35px' height='35px' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/donphammm/'>
            <InstagramIcon width='35px' height='35px' />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default ContactSection;
