import React from 'react';
import Laptop from '../../icons/LaptopCodeSolid';
import CSE from '../../img/CSE.png';
import NPPD from '../../img/NPPD.png';
import SmartChicken from '../../img/smartchicken.png';

const WorkLogo = props => {
  switch (props.name) {
    case 'laptop':
      return <Laptop {...props} />;
    case 'cse':
      return <img src={CSE} alt='cse' {...props} />;
    case 'nppd':
      return <img src={NPPD} alt='nppd' {...props} />;
    case 'smartchicken':
      return <img src={SmartChicken} alt='smartchicken' {...props} />;
    default:
      return 'No Logo';
  }
};

export default WorkLogo;
