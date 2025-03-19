import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-secondary p-4 fixed top-0 w-full z-10">
      <ul className="flex justify-around">
        <li><a href="#about" className="hover:text-primary">About</a></li>
        <li><a href="#projects" className="hover:text-primary">Projects</a></li>
        <li><a href="#skills" className="hover:text-primary">Skills</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        <li><a href="#bonus" className="hover:text-primary">Bonus</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
