import React from 'react';

const Section = props => {
  return (
    <div
      className={
        'section' +
        (props.bg ? ` bg-${props.bg}` : '') +
        (props.text ? ` text-${props.text}` : '')
      }
      id={props.id}
      ref={props.refProp}
    >
      <h1 className='section-title'>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Section;
