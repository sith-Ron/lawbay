"use client";
import React, { useState, useEffect } from "react";
import { Contact } from "../../components/contact";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener to toggle navbar rounded style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "The Team", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blogs", href: "/blog" },  // Updated path
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed w-full z-50 flex items-center justify-between p-4 ${isScrolled ? "bg-orange-200 rounded-br-lg rounded-bl-lg shadow-lg text-black" : "bg-transparent"
          } transition-all duration-300`}
      >
        <div className="flex items-center space-x-4">
          <Link href="/">
            <img src="./LawbayLogo.png" alt="Lawbay Logo" className="w-8 h-8" />
          </Link>
          <Link href="/" className="text-xl font-bold {isScrolled ? 'text-orange-200' : 'text-white'}">
            LAWBAY ADVOCATES
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            item.name === "Contact" ? (
              <Contact key={item.name}>
                <button className="hover:text-orange-500 transition-colors">
                  {item.name}
                </button>
              </Contact>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 rounded-b-sm bg-orange-200 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="self-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {menuItems.map((item) => (
              item.name === "Contact" ? (
                <Contact key={item.name}>
                  <button className="text-black hover:text-orange-500 transition-colors">
                    {item.name}
                  </button>
                </Contact>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
