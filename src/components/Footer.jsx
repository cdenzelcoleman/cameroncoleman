import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-black text-center text-secondary p-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <p>&copy; {new Date().getFullYear()} Cameron Coleman | All Rights Reserved</p>
        </div>
      </footer>
    )
  }

export default Footer
