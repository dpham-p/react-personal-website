import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const WorkContent = ({ content }) => {
  const { title, duration, duties } = content;
  return (
    <Fragment>
      <div className='work-content'>
        <h3>{title}</h3>
        {duration}
        <ul>
          {duties.map((text, index) => {
            return <li key={index}>{text}</li>;
          })}
        </ul>
      </div>
    </Fragment>
  );
};

WorkContent.prototype = {
  content: PropTypes.object.isRequired
};

export default WorkContent;
