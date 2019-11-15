import React from 'react';
import Works from '../work/Works';

const ExperienceSection = () => {
  const works = [
    {
      logo: 'laptop',
      content: {
        title: 'Self-Learning Developer',
        duration: '2019 - Present',
        duties: [
          'Learning C# and practicing Javascript.',
          'Currently working on Restaurant Picker application using MERN stack.',
          'Looking for internship/full-time position.'
        ]
      }
    },
    {
      logo: 'cse',
      content: {
        title: 'Controls Engineer',
        duration: 'CSE Services, May 2017 - Feb. 2019',
        duties: [
          "Developed, updated, and tested PLC (Programmable Logic Controller) programs to improve/maintain clients' productivity.",
          'On-site PLC integration and equipment testing for clients.'
        ]
      }
    },
    {
      logo: 'nppd',
      content: {
        title: 'System Controls Engineer',
        duration: 'Nebraska Public Power District, July 2016 - May 2017',
        duties: [
          'Provided power outage studies to operators to assist in daily operations and meeting compliance.',
          'Maintained network model for accurate representation of power grid and operation of Energy Management System.'
        ]
      }
    },
    {
      logo: 'smartchicken',
      content: {
        title: 'Associate Automation Engineer',
        duration: 'Smart Chicken, Sept. 2015 - June 2016',
        duties: [
          'Integrated PLCs and sensor equipments for data collection.',
          'Managed and developed HMI screens for operators to use for automated processes.',
          'Learned too much about chicken.'
        ]
      }
    }
  ];
  return (
    <div className='works'>
      <Works works={works} />
    </div>
  );
};

export default ExperienceSection;
