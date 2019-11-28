import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import ContactKeeper from '../../../img/contactkeeper.PNG';
import GithubFinder from '../../../img/githubfinder.PNG';
import JSCalculator from '../../../img/jscalculator.PNG';

const ProjectsSection = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  };
  return (
    <div className='projects'>
      <Swiper {...params}>
        <div
          style={{
            background: `url(${ContactKeeper})  top center/100% 100% no-repeat`,
            width: '80vw',
            height: '75vh'
          }}
        >
          <div className='image-overlay'>
            <Link to='/contactkeeper'>Contact Keeper</Link>
          </div>
        </div>
        <div
          style={{
            background: `url(${GithubFinder})  top center/100% 100% no-repeat`,
            width: '80vw',
            height: '75vh'
          }}
        >
          <div className='image-overlay'>
            <Link to='/githubfinder'>GitHub Finder</Link>
          </div>
        </div>
        <div
          style={{
            background: `url(${JSCalculator})  top center/100% 100% no-repeat`,
            width: '80vw',
            height: '70vh'
          }}
        >
          <div className='image-overlay'>
            <Link to='/jscalculator'>Javascript Calculator</Link>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectsSection;
