import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabsNav.css';

const TabsNav = () => (
  <div className="tabs-wrapper">
    <div className="tabs">
      <NavLink end to="/" className={({isActive}) => `tab ${isActive ? 'active' : ''}`}>Calculator</NavLink>
      <NavLink to="/result" className={({isActive}) => `tab ${isActive ? 'active' : ''}`}>Results</NavLink>
    </div>
  </div>
);

export default TabsNav;
