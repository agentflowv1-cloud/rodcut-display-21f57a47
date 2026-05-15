import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {
  // Add props if needed
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex">
          <NavLink to="/" className="text-blue-600 hover:text-blue-800 px-4 py-2">Home</NavLink>
          <NavLink to="/about" className="text-blue-600 hover:text-blue-800 px-4 py-2">About</NavLink>
          <NavLink to="/contact" className="text-blue-600 hover:text-blue-800 px-4 py-2">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;