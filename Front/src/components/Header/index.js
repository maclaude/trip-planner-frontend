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
import logo from 'src/assets/logo/logo_1.png';

/**
 * Code
 */
const Header = () => (
  <div id="header">
    <NavLink
      to="/"
      exact
    >
      <img id="header-logo" src={logo} alt="logo trip-planner" />
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
