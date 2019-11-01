import React from 'react';
import LaptopIcon from '../../icons/LaptopCodeSolid';
import CSEIcon from '../../img/CSE.png';
import NPPDIcon from '../../img/NPPD.png';
import SmartChickenIcon from '../../img/smartchicken.png';

const ExperienceSection = (
  <div className='history'>
    <h1>What I have done so far...</h1>
    <div className='history-item'>
      <div className='history-image'>{LaptopIcon}</div>
      <div className='history-content'>
        <div className='history-job'>
          <h2>Self-Learning Software Developer</h2>
          2019 - Present
        </div>
        <ul>
          <li>Learning C# and practicing Javascript.</li>
          <li>
            Currently working on Restaurant Picker application using MERN stack.
          </li>
          <li>Looking for internship/full-time position.</li>
        </ul>
      </div>
    </div>
    <div className='history-item'>
      <div className='history-image'>
        <img src={CSEIcon} alt='CSE' />
      </div>
      <div className='history-content'>
        <div className='history-job'>
          <h2>Controls Engineer</h2>
          CSE Services, May 2017 - Feb. 2019
        </div>
        <ul>
          <li>
            Developed, updated, and tested PLC (Programmable Logic Controller)
            programs to improve/maintain clients' productivity.
          </li>
          <li>On-site PLC integration and equipment testing for clients.</li>
        </ul>
      </div>
    </div>
    <div className='history-item'>
      <div className='history-image'>{<img src={NPPDIcon} alt='NPPD' />}</div>
      <div className='history-content'>
        <div className='history-job'>
          <h2>Systems Control Engineer</h2>
          Nebraska Public Power District, July 2016 - May 2017
        </div>
        <ul>
          <li>
            Provided power outage studies to operators to assist in daily
            operations and meeting compliance.
          </li>
          <li>
            Maintained network model for accurate representation of power grid
            and operation of Energy Management System.
          </li>
        </ul>
      </div>
    </div>
    <div className='history-item'>
      <div className='history-image'>
        <img src={SmartChickenIcon} alt='smartchicken' />
      </div>
      <div className='history-content'>
        <div className='history-job'>
          <h2>Associate Automation Engineer</h2>
          Smart Chicken, Sept. 2015 - June 2016
        </div>
        <ul>
          <li>Integrated PLCs and sensor equipments for data collection.</li>
          <li>
            Managed and developed HMI screens for operators to use for automated
            processes.
          </li>
          <li>Learned too much about chicken.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
