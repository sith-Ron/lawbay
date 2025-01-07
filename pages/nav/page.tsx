"use client";
import { Slide } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import { Contact } from "../../components/contact";

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
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "The Team", href: "#" },
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
          <a href="/">
            <img src="./LawbayLogo.png" alt="Lawbay Logo" className="w-8 h-8" />
          </a>
          <a href="#" className="text-xl font-bold {isScrolled ? 'text-orange-200' : 'text-white'}">
            LAWBAY ADVOCATES
          </a>
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
              <a
                key={item.name}
                href={item.href}
                className="hover:text-orange-500 transition-colors"
              >
                {item.name}
              </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      </nav>
      <div className="pt-20">
        <Slide direction="up" triggerOnce>

          <div className="relative">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: "url('./law.png')", opacity: "0.3" }}
            />
            <div className="relative flex flex-col items-center justify-center min-h-screen text-black dark:text-white py-8 px-4">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center px-4 md:px-12 gap-6">
                <p className="text-base md:text-xl max-w-3xl leading-snug">
                  A registered professional law firm based in Tanzania, specializing
                  in Corporate Governance, Mergers & Acquisitions, Investment,
                  Intellectual Property Law, Real Estate, Conveyancing, and Tax
                  Planning. With over ten years of collective experience, we offer
                  innovative legal business solutions nationwide from our headquarters
                  in Arusha.
                </p>
              </div>


              <a
                href="http://www.lawbay.co.tz"
                className="relative z-10 mt-6 px-6 md:px-8 py-3 md:py-4 bg-orange-300 text-black rounded-lg text-base md:text-lg font-medium hover:bg-orange-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default Navbar;
