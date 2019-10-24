import React from 'react';
import ContactKeeper from '../../img/contactkeeper.PNG';
import GithubFinder from '../../img/githubfinder.PNG';
import JSCalculator from '../../img/jscalculator.PNG';

const ProjectsSection = () => {
  return (
    <section class='page work'>
      <div class='works'>
        <h1>FEATURED WORKS</h1>
        <div class='card work-container'>
          <div class='work-item mySlides'>
            <a
              class='myLinks'
              href='https://dpham-contactkeeper.herokuapp.com/'
            >
              <img
                class='work-image'
                src={ContactKeeper}
                alt='contact keeper'
              />
            </a>
          </div>
          <div class='work-item mySlides'>
            <a class='myLinks' href='https://dpham-p.github.io/github-finder/'>
              <img class='work-image' src={GithubFinder} alt='github finder' />
            </a>
          </div>
          <div class='work-item mySlides'>
            <a class='myLinks' href='https://dpham-p.github.io/JS-Calculator/'>
              <img class='work-image' src={JSCalculator} alt='contact keeper' />
            </a>
          </div>
          <button
            class='w3-button w3-black image-button-left'
            onclick='plusDivs(-1)'
          >
            &#10094;
          </button>
          <button
            class='w3-button w3-black image-button-right'
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
