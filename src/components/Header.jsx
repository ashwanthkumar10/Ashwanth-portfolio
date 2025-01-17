import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-black text-white py-4 z-50 shadow-md">
      <nav className="container mx-auto flex justify-center items-center gap-x-8 relative">

        <a href="#home" className="hover:text-indigo-400">Home</a>
        <a href="#about" className="hover:text-indigo-400">About</a>
        <a href="#experience" className="hover:text-indigo-400">Experience</a>
        <a href="#projects" className="hover:text-indigo-400">Projects</a>
        <a href="#skills" className="hover:text-indigo-400">Skills</a>
        <a href="#footer" className="hover:text-indigo-400">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
