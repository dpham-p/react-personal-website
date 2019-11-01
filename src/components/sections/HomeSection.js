import React from 'react';
import BoyCoffee from '../../img/boy_coffee.png';

const HomeSection = (
  <div className='grid-2'>
    <div>
      <h1 className='firstName'>DONALD</h1>
      <h1 className='lastName'>PHAM</h1>
      <hr className='name-rule' />
      <h3 className='job'>Self-Learning Software Developer</h3>
    </div>
    <div>
      <img className='model' src={BoyCoffee} alt='boy with coffee' />
    </div>
  </div>
);

export default HomeSection;
