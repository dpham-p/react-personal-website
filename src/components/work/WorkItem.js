import React from 'react';
import WorkLogo from './WorkLogo';
import WorkContent from './WorkContent';

const WorkItem = ({ work }) => {
  const { logo, content } = work;

  return (
    <div className='work-item'>
      <div className='work-logo'>
        <WorkLogo name={logo} />
      </div>
      <WorkContent content={content} />
    </div>
  );
};

export default WorkItem;
