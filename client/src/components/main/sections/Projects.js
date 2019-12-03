import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Media from 'react-media';
import ContactKeeper from '../../../img/contactkeeper.PNG';
import ContactkeeperMobile from '../../../img/contactkeeper_mobile.PNG';
import GithubFinder from '../../../img/githubfinder.PNG';
import GithubFinderMobile from '../../../img/githubfinder_mobile.PNG';
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
    <Media queries={{ large: '(min-width: 1200px)' }}>
      {matches => (
        <div className='projects'>
          <Swiper {...params}>
            <div
              style={{
                background: `url(${
                  matches.large ? ContactKeeper : ContactkeeperMobile
                })  top center/100% 100% no-repeat`,
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
                background: `url(${
                  matches.large ? GithubFinder : GithubFinderMobile
                })  top center/100% 100% no-repeat`,
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
                background: `url(${
                  matches.large ? JSCalculator : JSCalculator
                })  top center/100% 100% no-repeat`,
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
      )}
    </Media>
  );
};

export default ProjectsSection;
