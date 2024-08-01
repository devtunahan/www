import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='flex justify-center mt-6 text-base'>
        <div className='bg-gray-700 p-4 rounded-xl text-white'>
          <Link to="/" className='p-2 mr-3 rounded-xl hover:bg-gray-600 transition-colors duration-300 ease-in-out'>⌘</Link>
          <Link to="/about" className='p-2 rounded-xl hover:bg-gray-600 transition-colors duration-300 ease-in-out'>About</Link>
          <Link to="/projects" className='p-2 rounded-xl hover:bg-gray-600 transition-colors duration-300 ease-in-out'>Projects</Link>
          <Link to="/writing" className='p-2 rounded-xl hover:bg-gray-600 transition-colors duration-300 ease-in-out'>Writing</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
