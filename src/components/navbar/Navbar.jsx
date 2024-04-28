import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} py-4 flex items-center justify-between px-6 sm:px-12 lg:px-24`}>
      {/* Logo */}
      <Link to="/" className="mx-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-indigo-600">BHABANI</span>
          <span className='text-xl font-bold text-indigo-400'>SHANKAR</span>
        </div>
      </Link>
      
      {/* Navigation Links - Desktop */}
      <ul className={`lg:flex items-center space-x-8 text-${darkMode ? 'gray-300' : 'gray-700'} hidden`}>
        <Link to="/" className="mx-4">Home</Link>
        <Link to="/about" className="mx-4">About</Link>
        <Link to="/academics" className="mx-4">Academics</Link>
        <Link to="/skills" className="mx-4">Skills</Link>
        <Link to="/projects" className="mx-4">Projects</Link>
        <Link to="/myteam" className="mx-4">My Team</Link>
        <Link to="/contact" className="mx-4">Contact</Link>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={handleMobileMenuToggle} className="lg:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm-4 7a1 1 0 100 2h2a1 1 0 100-2H8zm8-4a1 1 0 000 2h2a1 1 0 000-2h-2z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Navigation Links - Mobile */}
      {mobileMenuOpen && (
        <ul className={`lg:hidden absolute top-16 right-0 z-20 w-full bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} text-center`}>
          <Link to="/" className="block py-2 px-4">Home</Link>
          <Link to="/about" className="block py-2 px-4">About</Link>
          <Link to="/academics" className="block py-2 px-4">Academics</Link>
          <Link to="/skills" className="block py-2 px-4">Skills</Link>
          <Link to="/projects" className="block py-2 px-4">Projects</Link>
          <Link to="/myteam" className="block py-2 px-4">My Team</Link>
          <Link to="/contact" className="block py-2 px-4">Contact</Link>
        </ul>
      )}

      {/* Dark Mode/Light Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center bg-white text-black px-4 py-2 rounded-full focus:outline-none"
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 0a10 10 0 110 20 10 10 0 010-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-3a1 1 0 011 1v4a1 1 0 01-2 0V8a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 0a10 10 0 110 20 10 10 0 010-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-3a1 1 0 011 1v4a1 1 0 01-2 0V8a1 1 0 011-1zm0 10a7 7 0 100-14 7 7 0 000 14z" clipRule="evenodd" />
          </svg>
        )}
        <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </nav>
  );
};

export default Navbar;
