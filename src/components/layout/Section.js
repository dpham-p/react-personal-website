import React from 'react';

const Section = ({ title, sectionContent, id }) => {
  return (
    <div className='section'>
      <h1>{title}</h1>
      {sectionContent}
    </div>
  );
};

export default Section;
