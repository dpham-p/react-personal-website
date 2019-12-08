import React, { Fragment, useRef, createRef } from 'react';
import Navbar from '../layout/Navbar';
import Section from '../sections/Section';
import Main from '../sections/Main';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Experience from '../sections/Experience';

const Home = () => {
  const sectionIds = ['main', 'about', 'projects', 'experience', 'contact'];
  const sectionRefs = useRef(sectionIds.map(() => createRef()));
  //let sectionPos = 0;
  //let lastScrollTop = window.pageYOffset;

  /*  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }); */

  //const moveTo = ref => {
  /* ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    }); */
  //console.log(ref.current);
  //console.log(ref.current.offsetTop);
  /* if (ref.current.id === 'main') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }; */
  //const clientHeight = document.documentElement.clientHeight;
  /*  const handleScroll = e => {
    //console.log(e.nativeEvent.wheelDelta);
    if (e.nativeEvent.wheelDelta > 0) {
      sectionPos--;

      if (sectionPos > 0) {
        moveTo(sectionRefs.current[sectionPos]);
      } else {
        sectionPos = 0;
        moveTo(sectionRefs.current[sectionPos]);
      }
      //console.log(sectionPos);
    } else {
      sectionPos++;
      if (sectionPos < sectionIds.length) {
        moveTo(sectionRefs.current[sectionPos]);
      } else {
        sectionPos = sectionIds.length - 1;
      }
      //console.log(sectionPos);
    } 
  }*/

  return (
    <Fragment>
      <Navbar />
      <div className='section-container'>
        <Section
          bg='coffee'
          text='light'
          id='main'
          refProp={sectionRefs.current[0]}
        >
          {Main}
        </Section>

        <Section
          title='About Me'
          bg='yellow'
          text='dark'
          id='about'
          refProp={sectionRefs.current[1]}
        >
          {About}
        </Section>

        <Section
          title='Projects'
          bg='dark-shade'
          text='light'
          id='projects'
          refProp={sectionRefs.current[2]}
        >
          <Projects />
        </Section>

        <Section
          title='Experience'
          bg='light-shade'
          text='dark'
          id='experience'
          refProp={sectionRefs.current[3]}
        >
          <Experience />
        </Section>

        <Section
          bg='dark-shade'
          text='light'
          id='contact'
          refProp={sectionRefs.current[4]}
        >
          {Contact}
        </Section>
      </div>
    </Fragment>
  );
};

export default Home;
