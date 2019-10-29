import React from 'react';

const Section = ({ title, sectionContent, id }) => {
  return (
    <div className='section' id={id}>
      <h1>{title}</h1>
      {sectionContent}
    </div>
  );
};

export default Section;
