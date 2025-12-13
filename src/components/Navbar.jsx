import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    `block py-2 text-sm ${
      isActive
        ? "text-ink border-b border-accent"
        : "text-inkMuted hover:text-ink"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-paperDark"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="font-serif text-lg">
          Meet Gandhi
        </NavLink>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {["/", "/about", "/projects", "/certificates", "/contact"].map(
            (path, i) => (
              <li key={i}>
                <NavLink to={path} className={linkClasses}>
                  {path === "/" ? "Home" : path.slice(1)}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-[2px] w-6 bg-ink transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-t border-paperDark">
          <ul className="px-6 py-6 space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/certificates", label: "Certificates" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={linkClasses}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
