import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../context/UIContext';

function Navbar() {
  const { activeSection, setActiveSection } = useUI();

  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
    { id: 'bonus', label: 'Bonus' }
  ];

  return (
    <nav className="bg-black text-secondary p-4 fixed top-0 w-full z-10 pixel-border">
      <ul className="flex justify-around">
        {links.map((link) => (
          <motion.li
            key={link.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href={`#${link.id}`}
              className={`hover:text-primary ${activeSection === link.id ? 'text-primary' : ''}`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;