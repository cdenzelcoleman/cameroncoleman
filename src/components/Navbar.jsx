import React from 'react'

const Navbar = () => {
    return (
      <nav className="bg-black text-green-400 p-4 fixed w-full z-10">
        <ul className="flex justify-around">
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#projects" className="hover:text-green-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-green-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          <li><a href="#bonus" className="hover:text-green-600">Bonus</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;