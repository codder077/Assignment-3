import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Project Management</div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-blue-400">Home</Link>
        <Link to="/projects" className="text-white hover:text-blue-400">Projects</Link>
        <Link to="/login" className="text-white hover:text-blue-400">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
