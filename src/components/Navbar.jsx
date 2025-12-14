import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import resumePDF from "../assets/projects/MeetGandhiResume.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-paper z-50 border-b border-ink/10">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <NavLink
          to="/"
          className="font-serif text-lg tracking-wide"
        >
          Meet Gandhi
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/certificates">Certificates</NavItem>
          <NavItem to="/contact">Contact</NavItem>

          {/* Resume */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm transition-all duration-200
                       after:absolute after:left-0 after:-bottom-1
                       after:h-[1px] after:w-0 after:bg-accent
                       hover:after:w-full after:transition-all
                       hover:-translate-y-[1px]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[4px]"
        >
          <span className="w-6 h-[2px] bg-ink" />
          <span className="w-6 h-[2px] bg-ink" />
          <span className="w-6 h-[2px] bg-ink" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-6 space-y-5">
          <MobileNavItem to="/" setOpen={setOpen}>Home</MobileNavItem>
          <MobileNavItem to="/about" setOpen={setOpen}>About</MobileNavItem>
          <MobileNavItem to="/projects" setOpen={setOpen}>Projects</MobileNavItem>
          <MobileNavItem to="/certificates" setOpen={setOpen}>Certificates</MobileNavItem>
          <MobileNavItem to="/contact" setOpen={setOpen}>Contact</MobileNavItem>

          {/* Resume Mobile */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium"
          >
            Resume →
          </a>
        </div>
      )}
    </header>
  );
};

/* ---------- Components ---------- */

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative transition-all duration-200
       after:absolute after:left-0 after:-bottom-1
       after:h-[1px] after:bg-ink after:transition-all
       ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
    }
  >
    {children}
  </NavLink>
);

const MobileNavItem = ({ to, children, setOpen }) => (
  <NavLink
    to={to}
    onClick={() => setOpen(false)}
    className="block text-sm"
  >
    {children}
  </NavLink>
);

export default Navbar;
