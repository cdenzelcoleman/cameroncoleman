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
      <div className="main-container">
        <BackgroundManager />
        <header className="text-center py-8">
        <h1 className="text-primary text-5xl md:text-6xl pixel-text-glow">Cameron Coleman</h1>
        <p className="text-secondary mt-4 text-lg">Full-Stack Developer & Software Engineer</p>
      </header>
        <div className="content-wrapper">
          <Navbar />
          <div className="container">
            <main className="spaced-sections">
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Bonus />
            </main>
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;