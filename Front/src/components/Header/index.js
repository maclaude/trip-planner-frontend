/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './header.scss';

/**
 * Code
 */
const Header = () => (
  <div id="header">
    <NavLink
      to="/"
      exact
    >
      <img id="header-logo" src="src/assets/logo/logo_1.png" alt="logo trip-planner" />
    </NavLink>
    <nav className="nav">
      <NavLink
        to="/inscription"
        className="nav-link"
      >
        Sign-up
      </NavLink>
      <NavLink
        to="/connexion"
        className="nav-link"
      >
      Login
      </NavLink>
    </nav>
  </div>
);

/**
 * Export
 */
export default Header;
