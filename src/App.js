import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import HomeSection from './components/sections/HomeSection';
import ProjectsSection from './components/sections/ProjectsSection';

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
