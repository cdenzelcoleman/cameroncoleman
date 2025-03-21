import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../context/UIContext';

function Navbar() {
  const { activeSection, setActiveSection, scrollProgress } = useUI();

  const links = [
    { id: 'about', label: 'Level 1: Bio' },
    { id: 'projects', label: 'Level 2: Projects' },
    { id: 'skills', label: 'Level 3: Skills' },
    { id: 'contact', label: 'Level 4: Contact' },
    { id: 'bonus', label: 'BONUS LEVEL' }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = links.findIndex(link => link.id === activeSection);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % links.length;
        setActiveSection(links[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + links.length) % links.length;
        setActiveSection(links[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, links, setActiveSection]);

  return (
    <nav className="bg-black/80 text-secondary p-4 fixed top-0 w-full z-10 pixel-border backdrop-blur-sm retro-cursor">
      <ul className="flex justify-around mb-2">
        {links.map((link) => (
          <motion.li
            key={link.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <a
              href={`#${link.id}`}
              className={`hover:text-primary transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-primary pixel-text-glow' 
                  : 'text-secondary'
              }`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </motion.li>
        ))}
      </ul>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-black/50 relative pixel-border">
        <motion.div 
          className="h-full bg-primary"
          style={{ width: `${scrollProgress * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.5, ease: 'circOut' }}
        />
        <div className="absolute inset-0 pixel-scanline" />
        <div className="absolute top-0 right-0 text-xs text-primary font-retro">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>

      {/* CRT Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none pixel-scanline" />
    </nav>
  );
}

export default Navbar;