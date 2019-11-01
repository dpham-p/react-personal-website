import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Section from './components/layout/Section';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';

function App() {
  return (
    <Router>
      <Navbar />
      <span className='anchor' id='home' />
      <Section title='' sectionContent={HomeSection} bg='dark-shade' />
      <span className='anchor' id='projects' />
      <Section
        title='Projects'
        sectionContent={ProjectsSection}
        id='projects'
      />
      <span className='anchor' id='about' />
      <Section title='About Me' sectionContent={AboutSection} id='about' />
      <span className='anchor' id='experience' />
      <Section title='Experience' sectionContent={ExperienceSection} />
      <span className='anchor' id='contact' />
      <Section title='Contact' sectionContent={ContactSection} id='contact' />
    </Router>
  );
}

export default App;
