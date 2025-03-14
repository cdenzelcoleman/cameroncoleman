import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Bonus from './pages/Bonus'
import './App.css'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Bonus />
    </div>
  );
}

export default App;
