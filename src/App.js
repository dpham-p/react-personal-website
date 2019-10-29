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
      <Section title='' sectionContent={HomeSection} id='home' />
      <Section
        title='Projects'
        sectionContent={ProjectsSection}
        id='projects'
      />
      <Section title='About Me' sectionContent={AboutSection} id='about' />
    </Router>
  );
}

export default App;
