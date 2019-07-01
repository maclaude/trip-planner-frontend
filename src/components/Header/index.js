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
// Assets
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
      <img id="header__logo" src={logo} alt="logo trip-planner" />
    </NavLink>
    <nav className="nav">
      <NavLink
        to="/inscription"
        className="nav__link"
      >
        Inscription
      </NavLink>
      <NavLink
        to="/connexion"
        className="nav__link"
      >
        Connexion
      </NavLink>
    </nav>
  </div>
);

/**
 * Export
 */
export default Header;
