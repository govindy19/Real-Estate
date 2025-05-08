"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#f3f3f3] sticky top-0 z-30 shadow-md">
      <nav className="flex justify-between items-center gap-4 px-4 lg:px-20 py-3 relative">
        {/* Logo Section */}
        <div id="logo">
          <img src="/logo.png" alt="Logo" className="lg:w-[150px] w-[120px]" />
        </div>

        {/* Desktop Menu */}
        <ul className="lg:flex hidden justify-center items-center gap-8 text-black uppercase font-semibold">
          <li>
            <a
              href="#home"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#properties"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden block text-white cursor-pointer" onClick={toggleMenu}>
          <img
            src="/menu-icon.png"
            alt="Menu Icon"
            className="w-[30px] h-[30px]"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-start bg-white gap-2 p-4 text-black uppercase font-semibold">
          <li>
            <a
              href="#home"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#properties"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[15px] cursor-pointer hover:bg-red-600 rounded-lg px-3 py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
