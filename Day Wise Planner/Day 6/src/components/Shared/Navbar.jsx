import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaConciergeBell, FaSignInAlt, FaUserPlus, FaEnvelope, FaBars } from 'react-icons/fa';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    {
      title: "Home",
      path: "/",
      icon: <FaHome />
    },
    {
      title: "Jobs",
      path: "/jobs",
      icon: <FaBriefcase />
    },
    {
      title: "Services",
      path: "/services",
      icon: <FaConciergeBell />
    },
    {
      title: "Contact Us",
      path: "/contactus",
      icon: <FaEnvelope />
    },
    {
      title: "Login",
      path: "/login",
      icon: <FaSignInAlt />
    },
    {
      title: "Register",
      path: "/register",
      icon: <FaUserPlus />
    },
  ];

  return (
    <div className="w-full h-[8vh] flex flex-col md:flex-row justify-between items-center shadow-sm shadow-primary/50 fixed top-0 bg-black z-50 px-4 md:px-8">
      <div className="w-full md:w-1/4 h-full font-bold flex justify-between md:justify-start items-center text-lg">
        JobAura
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      <div className={`w-full md:w-2/4 h-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-8 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        {
          NavLinks.map((links, index) => (
            <li key={index} className="list-none flex items-center">
              <NavLink to={links.path} className="flex items-center gap-2 text-sm md:text-base">
                {links.icon}
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
