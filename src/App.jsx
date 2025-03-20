import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Bonus from './pages/Bonus';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Bonus />
      </main>
      <Footer />
    </div>
  )
}

export default App;