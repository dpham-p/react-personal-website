import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Section from './components/layout/Section';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';

function App() {
  return (
    <Router>
      <Navbar />
      <span className='anchor' id='home' />
      <Section title='' sectionContent={HomeSection} id='home' />
      <span className='anchor' id='projects' />
      <Section
        title='Projects'
        sectionContent={ProjectsSection}
        id='projects'
      />
      <span className='anchor' id='about' />
      <Section title='About Me' sectionContent={AboutSection} id='about' />
    </Router>
  );
}

export default App;
