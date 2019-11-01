import React from 'react';

const Section = ({ title, sectionContent, bg }) => {
  return (
    <div className={'section' + (bg ? ` bg-${bg}` : '')}>
      <h1>{title}</h1>
      {sectionContent}
    </div>
  );
};

export default Section;
