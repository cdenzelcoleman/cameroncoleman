import React from 'react'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Bonus from './pages/Bonus'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div className="overflow-x-hidden">
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Bonus />
    </div>
  );
}

export default App;