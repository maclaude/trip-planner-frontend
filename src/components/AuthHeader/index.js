/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './auth-header.scss';

/**
 * Code
 */
const Header = () => (
  <div className="auth-header">
    <NavLink to="/" exact className="auth-header__logo" href="#">Trip-planner</NavLink>
    <nav>
      <ul className="auth-nav__list">
        <li className="auth-nav__list-item">
          <NavLink to="/inscription" exact className="auth-nav__link auth-nav__link--btn">Inscription</NavLink>
        </li>
        <li className="auth-nav__list-item">
          <NavLink to="/connexion" exact className="auth-nav__link auth-nav__link--btn auth-nav__link--btn--highlight">Connexion</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

/**
 * Export
 */
export default Header;
