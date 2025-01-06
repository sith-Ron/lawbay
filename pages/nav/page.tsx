import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="navbar" className="flex items-center justify-between p-4 bg-orange-200">
      <div className='flex items-center space-x-4'>
        <img src="./LawbayLogo.png" alt="" className='w-8 h-8'/>
        <a href="#" className="text-xl font-bold">
          LAWBAY ADVOCATES
        </a>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-black hover:text-white">Home</a>
        <a href="#" className="text-black hover:text-white">About</a>
        <a href="#" className="text-black hover:text-white">The Team</a>
        <a href="#" className="text-black hover:text-white">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-orange-200 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col p-4 space-y-4">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#" className="text-black hover:text-white">Home</a>
          <a href="#" className="text-black hover:text-white">About</a>
          <a href="#" className="text-black hover:text-white">The Team</a>
          <a href="#" className="text-black hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;