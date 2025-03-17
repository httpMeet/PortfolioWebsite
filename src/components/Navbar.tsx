import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates">
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 