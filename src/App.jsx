import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Bonus from './pages/Bonus';
import BackgroundManager from './components/BackgroundManager';
import './App.css';

function App() {
  return (
    <div className="container">
      <BackgroundManager />
      <h1 className="text-primary z-10 relative">Cameron Coleman</h1>
      <Navbar />
      <main className="relative z-10">
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Bonus />
      </main>
      <Footer />
    </div>
  );
}

export default App;