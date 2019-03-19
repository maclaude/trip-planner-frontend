/**
 * NPM import
 */
import React from 'react';

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
    <img id="header-logo" src="src/assets/logos/logo_1.png" alt="logo trip-planner" />
    <nav className="nav">
      <a className="nav-link">Login</a>
      <a className="nav-link">Sign-up</a>
    </nav>
  </div>
);

/**
 * Export
 */
export default Header;
