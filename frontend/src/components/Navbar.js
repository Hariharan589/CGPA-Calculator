import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-title">GPA Calculator</NavLink>
        <p className="navbar-subtitle">Calculate your semester-wise GPA and cumulative CGPA</p>
      </div>
    </nav>
  );
};

export default Navbar;
