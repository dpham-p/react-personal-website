import React from 'react';

const HomeSection = (
  <div className='home grid-2'>
    <div>
      <h1 className='firstName'>DONALD</h1>
      <h1 className='lastName'>PHAM</h1>
      <hr className='name-rule' />
      <h1 className='headline'>Aspiring Software Developer</h1>
      <div className='social-links'>
        <a
          href='https://github.com/dpham-p'
          className='btn btn-md btn-primary'
          style={{ color: 'var(--light-shade)', opacity: '0.75' }}
        >
          My GitHub
        </a>
      </div>
    </div>
  </div>
);

export default HomeSection;
