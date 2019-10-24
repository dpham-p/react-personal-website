import React from 'react';
import BoyCoffee from '../../img/boy_coffee.svg';

const ProjectsSection = () => {
  return (
    <div>
      <section className='page character'>
        <div className='description'>
          <h1 className='firstName'>DONALD</h1>
          <h1 className='lastName'>PHAM</h1>
          <hr className='name-rule' />
          <h3 className='job'>Self-Learning Software Developer</h3>
        </div>
        <div className='hero'>
          <img className='model' src={BoyCoffee} alt='boy with coffee' />
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
