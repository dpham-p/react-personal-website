import React from 'react';
import ContactKeeper from '../../img/contactkeeper.PNG';
import GithubFinder from '../../img/githubfinder.PNG';
import JSCalculator from '../../img/jscalculator.PNG';

const ProjectsSection = () => {
  return (
    <section className='page work'>
      <div className='works'>
        <h1>FEATURED WORKS</h1>
        <div className='card work-container'>
          <div className='work-item mySlides'>
            <a
              className='myLinks'
              href='https://dpham-contactkeeper.herokuapp.com/'
            >
              <img
                className='work-image'
                src={ContactKeeper}
                alt='contact keeper'
              />
            </a>
          </div>
          <div className='work-item mySlides'>
            <a
              className='myLinks'
              href='https://dpham-p.github.io/github-finder/'
            >
              <img
                className='work-image'
                src={GithubFinder}
                alt='github finder'
              />
            </a>
          </div>
          <div className='work-item mySlides'>
            <a
              className='myLinks'
              href='https://dpham-p.github.io/JS-Calculator/'
            >
              <img
                className='work-image'
                src={JSCalculator}
                alt='contact keeper'
              />
            </a>
          </div>
          <button
            className='w3-button w3-black image-button-left'
            onclick='plusDivs(-1)'
          >
            &#10094;
          </button>
          <button
            className='w3-button w3-black image-button-right'
            onclick='plusDivs(1)'
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
